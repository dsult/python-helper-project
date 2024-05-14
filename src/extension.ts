import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { NewlineSpaceRemover } from "./typing_assist/completer/NewlineSpaceRemover";
import { CommentSeparator } from "./typing_assist/completer/CommentSeparator";
import { ReturnDedent } from "./typing_assist/completer/ReturnDedent";

import { smartDeletePyright } from "./smart_delete/smartDeletePyright";
import { BracketingExpressionCompleterPyright } from "./typing_assist/completer/BracketingExpressionCompleterPyright";
import {
  setContextByConfiguration,
  addPattern,
  removePattern,
  changeConfiguration,
} from "./utilsExtension";
import { smartDeleteTreeSitter } from "./smart_delete/smartDeleteTreeSitter";
import { PythonLexer } from "./lib/antlr/PythonLexer";
import { PythonParser } from "./lib/antlr/PythonParser";
import { ANTLRInputStream, CharStreams, CommonTokenStream } from "antlr4ts";

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
    assistService.processing(e);
    assistService.updateTree(e);
  });

  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    "python-helper-project.newDelete",
    smartDeleteTreeSitter(assistService)
    // smartDeletePyright()
  );
  context.subscriptions.push(disposable);

  setContextByConfiguration(
    "typing-assist.isCursorDownAfterCommentLineOn",
    "typing-assist.enableCursorDownAfterCommentLine"
  );

  vscode.workspace.onDidChangeConfiguration((e) =>
    changeConfiguration(e, context)
  );

  // отладочная штука
  disposable = vscode.commands.registerCommand(
    "python-helper-project.test",
    async () => {
      // Create the lexer and parser
      let inputStream = CharStreams.fromString("print(123)");
      let lexer = new PythonLexer(inputStream);
      let tokenStream = new CommonTokenStream(lexer);
      let parser = new PythonParser(tokenStream);
      // Parse the input, where `compilationUnit` is whatever entry point you defined
      let tree = parser.file_input();
      console.log(tree);

      //   const tree = assistService.tree;
      //   let editor = assistService.editor;
      //   if (!editor) {
      //     return;
      //   }
      //   const position = editor.selection.active;
      //   const currentNode = tree.rootNode.descendantForPosition({
      //     row: position.line,
      //     column: position.character,
      //   });
      //   console.log(123);
      //   console.log(assistService.tree);
      //   console.log(currentNode);
      //   console.log(currentNode.text);
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
