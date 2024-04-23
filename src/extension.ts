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
import * as fs from "fs";
import * as path from "path";

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
    console.log(event);

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

    if (event.affectsConfiguration("string-highlighting.json")) {
      const config: any = vscode.workspace
        .getConfiguration()
        .get("string-highlighting.json");
      const filePath = path.join(
        context.extensionPath,
        "syntaxes",
        "MagicPython.tmLanguage.json"
      );
      const includeSetting = "#embedded.source.json";
      updatePatternDisabled(filePath, includeSetting, config);
    }
  });

  // отладочная штука
  disposable = vscode.commands.registerCommand(
    "python-helper-project.test",
    async () => {
      console.log(132);
    }
  );
  context.subscriptions.push(disposable);
}

function updatePatternDisabled(
  filePath: string,
  includeSetting: string,
  config: boolean
): void {
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const languageDefinition = JSON.parse(fileContent);

  let patterns: any[] = languageDefinition.patterns;
  if (config) {
    let patternToAdd = {
      include: includeSetting,
    };

    let patterns = languageDefinition.patterns;

    patterns.unshift(patternToAdd);
  } else {
    for (let i = 0; i < patterns.length; i++) {
      let pattern = patterns[i];

      if (pattern.include === includeSetting) {
        patterns.splice(i, 1);
        i--;
      }
    }
  }

  // Преобразовать объект обратно в JSON
  const updatedContent = JSON.stringify(languageDefinition, null, 2);

  // Записать обновленное содержимое обратно в файл
  fs.writeFileSync(filePath, updatedContent, "utf-8");
}
function setContextByConfiguration(context: string, configuration: string) {
  const config = vscode.workspace.getConfiguration().get(configuration);

  vscode.commands.executeCommand("setContext", context, config);
}

export function deactivate() {}
