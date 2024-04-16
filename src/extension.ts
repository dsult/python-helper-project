import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { NewlineSpaceRemover } from "./typing_assist/completer/NewlineSpaceRemover";
import { CommentSeparator } from "./typing_assist/completer/CommentSeparator";
import { ReturnDedent } from "./typing_assist/completer/ReturnDedent";

import { ParseOptions, Parser } from "./lib/pyright-parser/parser/parser";
import { DiagnosticSink } from "./lib/pyright-parser/common/diagnosticSink";
import * as parseTreeUtils from "./lib/pyright-parser/analyzer/parseTreeUtils";

import { smartDeletePyright } from "./smart_delete/smartDeletePyright";
import {
  FormatStringNode,
  ParseNode,
  StringNode,
  isExpressionNode,
} from "./lib/pyright-parser/parser/parseNodes";
import { ParseTreeWalker } from "./lib/pyright-parser/analyzer/parseTreeWalker";
import { BracketingExpressionCompleterPyright } from "./typing_assist/completer/BracketingExpressionCompleterPyright";

let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {
  const assistService = await TypeAssistService.init([
    new StringSeparator(),
    new DocstringCompleter(),
    new FunctionCompleter(),
    // new BracketingExpressionCompleter(),
    new BracketingExpressionCompleterPyright(),
    new NewlineSpaceRemover(),
    new CommentSeparator(),
    new ReturnDedent(),
  ]);

  vscode.window.onDidChangeActiveTextEditor((e) => assistService.changeDoc(e));

  disposable = vscode.workspace.onDidChangeTextDocument((e) => {
    // console.log(e);
    // console.log(e.document.getText());
    assistService.processing(e);
    assistService.updateTree(e);
  });

  context.subscriptions.push(disposable);

  // отладочная штука
  disposable = vscode.commands.registerCommand(
    "python-helper-project.test",
    async () => {
      //   let editor = vscode.window.activeTextEditor;
      //   // Определяем правило подсветки для всех строк в синий цвет
      //   let blueColorRule: vscode.DecorationOptions = {
      //     range: new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE), // Диапазон для всех строк
      //     renderOptions: {
      //       backgroundColor: "blue", // Синий цвет подсветки
      //     },
      //   };
      //   // Применяем правило к текущему редактору
      //   if (editor) {
      //     let decoration =
      //       vscode.window.createTextEditorDecorationType(blueColorRule);
      //     editor.setDecorations(decoration, [blueColorRule.range]);
      //   }
      console.log(132);
    }
  );
  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    "python-helper-project.newDelete",
    // smartDeleteTreeSitter(assistService)
    smartDeletePyright()
  );
  context.subscriptions.push(disposable);

  setContextByConfiguration(
    "typing-assist.isCursorDownAfterCommentLineOn",
    "typing-assist.enableCursorDownAfterCommentLine"
  );

  vscode.workspace.onDidChangeConfiguration((event) => {
    if (
      event.affectsConfiguration(
        "typing-assist.enableCursorDownAfterCommentLine"
      )
    ) {
      setContextByConfiguration(
        "typing-assist.isCursorDownAfterCommentLineOn",
        "typing-assist.enableCursorDownAfterCommentLine"
      );
    }
  });
}

function setContextByConfiguration(context: string, configuration: string) {
  const config = vscode.workspace.getConfiguration().get(configuration);

  vscode.commands.executeCommand("setContext", context, config);
}

export function deactivate() {}
