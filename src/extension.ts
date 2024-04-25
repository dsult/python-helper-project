import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { NewlineSpaceRemover } from "./typing_assist/completer/NewlineSpaceRemover";
import { CommentSeparator } from "./typing_assist/completer/CommentSeparator";
import { ReturnDedent } from "./typing_assist/completer/ReturnDedent";

import * as path from "path";

import { smartDeletePyright } from "./smart_delete/smartDeletePyright";
import { BracketingExpressionCompleterPyright } from "./typing_assist/completer/BracketingExpressionCompleterPyright";
import {
  setContextByConfiguration,
  addPattern,
  removePattern,
} from "./utilsExtension";

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

  vscode.window.onDidChangeActiveTextEditor(
    (e: vscode.TextEditor | undefined) => assistService.changeDoc(e)
  );

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

      const grammarFilePath = path.join(
        context.extensionPath,
        "syntaxes",
        "python-json.json"
      );

      const patternFilePath = path.join(
        context.extensionPath,
        "syntaxes",
        "python-json-pattern.json"
      );

      let isEnabled = vscode.workspace
        .getConfiguration()
        .get("string-highlighting.json");
      if (isEnabled) {
        addPattern(grammarFilePath, patternFilePath);
      } else {
        removePattern(grammarFilePath);
      }
    }
    if (event.affectsConfiguration("string-highlighting.xml")) {
      const config: any = vscode.workspace
        .getConfiguration()
        .get("string-highlighting.xml");

      const grammarFilePath = path.join(
        context.extensionPath,
        "syntaxes",
        "python-xml.json"
      );

      const patternFilePath = path.join(
        context.extensionPath,
        "syntaxes",
        "python-xml-pattern.json"
      );

      let isEnabled = vscode.workspace
        .getConfiguration()
        .get("string-highlighting.xml");
      if (isEnabled) {
        addPattern(grammarFilePath, patternFilePath);
      } else {
        removePattern(grammarFilePath);
      }
    }
  });

  // отладочная штука
  disposable = vscode.commands.registerCommand(
    "python-helper-project.test",
    async () => {
      console.log(123);
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
