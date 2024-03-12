import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { BracketingExpressionCompleter } from "./typing_assist/completer/BracketingExpressionCompleter";
import {
  getParentWithType,
  hasParentWithType,
  isPositionInsideNode,
} from "./TreeUtils";
import { NewlineSpaceRemover } from "./typing_assist/completer/NewlineSpaceRemover";

let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {
  const assistService = await TypeAssistService.init([
    new StringSeparator(),
    new DocstringCompleter(),
    new FunctionCompleter(),
    new BracketingExpressionCompleter(),
    new NewlineSpaceRemover(),
  ]);

  vscode.window.onDidChangeActiveTextEditor((e) => assistService.changeDoc(e));

  disposable = vscode.workspace.onDidChangeTextDocument((e) => {
    assistService.processing(e);
    assistService.updateTree(e);
  });

  context.subscriptions.push(disposable);

  // отладочная штука
  disposable = vscode.commands.registerCommand(
    "python-helper-project.test",
    async () => {
      const position = assistService.editor!.selection.active;

      const currentNode = assistService.tree.rootNode.descendantForPosition({
        row: position.line,
        column: position.character,
      });

      //   console.log(assistService.tree.rootNode.toString());

      console.log({
        //   rootNodetext: assistService.tree.rootNode.text,
        rootNodetoString: assistService.tree.rootNode.toString(),
        currentNode: currentNode,
        // currentNodetype: currentNode.type,
        // currentNodetext: currentNode.text,
        // currentNodeParenttype: currentNode.parent?.type,
        // currentNodeParenttext: currentNode.parent?.text,
      });
    }
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
