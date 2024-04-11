import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { BracketingExpressionCompleter } from "./typing_assist/completer/BracketingExpressionCompleter";
import { NewlineSpaceRemover } from "./typing_assist/completer/NewlineSpaceRemover";
import { CommentSeparator } from "./typing_assist/completer/CommentSeparator";
import { ReturnDedent } from "./typing_assist/completer/ReturnDedent";
import { convertToPosition } from "./TreeUtils";

import { ParseOptions, Parser } from "./lib/pyright-parser/parser/parser";
import { DiagnosticSink } from "./lib/pyright-parser/common/diagnosticSink";
import * as parseTreeUtils from "./lib/pyright-parser/analyzer/parseTreeUtils";

import * as util from "util";
import { smartDeleteTreeSitter } from "./smart_delete/smartDeleteTreeSitter";
import { smartDeletePyright } from "./smart_delete/smartDeletePyright";
import { getPreviousSibling } from "./utilsPR";
import { getCodeFlowExpressions } from "./lib/pyright-parser/analyzer/analyzerNodeInfo";
import {
  ErrorNode,
  FormatStringNode,
  ParseNode,
  StringNode,
  isExpressionNode,
} from "./lib/pyright-parser/parser/parseNodes";
import { ParseTreeWalker } from "./lib/pyright-parser/analyzer/parseTreeWalker";

let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {
  const assistService = await TypeAssistService.init([
    new StringSeparator(),
    new DocstringCompleter(),
    new FunctionCompleter(),
    new BracketingExpressionCompleter(),
    new NewlineSpaceRemover(),
    new CommentSeparator(),
    new ReturnDedent(),
  ]);

  vscode.window.onDidChangeActiveTextEditor((e) => assistService.changeDoc(e));

  disposable = vscode.workspace.onDidChangeTextDocument((e) => {
    // console.log(e);
    // e -> TypingAssistData
    assistService.processing(e);
    assistService.updateTree(e);
  });

  context.subscriptions.push(disposable);

  // отладочная штука
  disposable = vscode.commands.registerCommand(
    "python-helper-project.test",
    async () => {
      const editor = assistService.editor!;
      const position = editor.selection.active;
      const offset = editor.document.offsetAt(editor.selection.active);
      const currentNodeTS = assistService.tree.rootNode.descendantForPosition({
        row: position.line,
        column: position.character,
      });
      console.log(currentNodeTS);
      console.log(assistService.tree.rootNode);

      //   console.log("test1");

      let parseOptions = new ParseOptions();
      parseOptions.reportErrorsForParsedStringContents = true;
      const parser = new Parser();
      const diagSink = new DiagnosticSink();
      let text;

      text = editor.document.getText();

      let some = parser.parseSourceFile(text, parseOptions, diagSink);

      console.log(some);

      const node = parseTreeUtils.findNodeByPosition(
        some.parserOutput.parseTree,
        editor.selection.active,
        some.tokenizerOutput.lines
      );

      if (!node) {
        return;
      }

      class StringNodeWalker extends ParseTreeWalker {
        constructor(
          private _callback: (node: StringNode | FormatStringNode) => void
        ) {
          super();
        }

        override visit(node: ParseNode) {
          console.log(
            "Node: ",
            parseTreeUtils.printParseNodeType(node.nodeType)
          );
          return true;
        }

        override visitString(node: StringNode) {
          this._callback(node);
          //   console.log(node, node.value);
          return true;
        }
        override visitFormatString(node: FormatStringNode) {
          this._callback(node);
          //   console.log(node, node.value);
          return true;
        }
      }
      console.log("--------------------WALKER--------------------");

      let txtw = new StringNodeWalker((node) => console.log(node, node.value));
      //   txtw.walk(node);
      txtw.walk(some.parserOutput.parseTree);

      console.log("--------------------PARENTS--------------------");
      //   console.log(node);
      console.log(diagSink);

      let currentNode = node;
      console.log(parseTreeUtils.printParseNodeType(currentNode.nodeType));
      console.log(currentNode.parent);
      while (currentNode.parent) {
        console.log(
          parseTreeUtils.printParseNodeType(currentNode.parent.nodeType)
        );
        console.log(currentNode.parent);

        currentNode = currentNode.parent;
      }
      console.log("----------------------------------------");
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
