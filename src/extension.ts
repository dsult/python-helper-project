import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { BracketingExpressionCompleter } from "./typing_assist/completer/BracketingExpressionCompleter";
import { NewlineSpaceRemover } from "./typing_assist/completer/NewlineSpaceRemover";
import { SyntaxNode } from "web-tree-sitter";
import { CommentSeparator } from "./typing_assist/completer/CommentSeparator";

let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {
  const assistService = await TypeAssistService.init([
    new StringSeparator(),
    new DocstringCompleter(),
    new FunctionCompleter(),
    new BracketingExpressionCompleter(),
    new NewlineSpaceRemover(),
    new CommentSeparator(),
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
      const missingNodes: SyntaxNode[] = [];

      function traverseTree(node: SyntaxNode): void {
        node.children.forEach((n: SyntaxNode) => {
          if (n.isMissing()) {
            missingNodes.push(n);
          }
          traverseTree(n);
        });
      }

      traverseTree(assistService.tree.rootNode);

      const editor = vscode.window.activeTextEditor;
      const document = vscode.workspace.textDocuments[0];

      console.log(missingNodes);

      const edits: { position: vscode.Position; newText: string }[] = [];

      missingNodes.forEach((missingNode: SyntaxNode) => {
        const position = document.positionAt(missingNode.startIndex);
        edits.push({ position, newText: missingNode.type });
      });

      await editor?.edit(
        (editBuilder) => {
          edits.forEach(({ position, newText }) => {
            editBuilder.replace(position, newText);
          });
        },
        { undoStopAfter: false, undoStopBefore: false }
      );

      const position = assistService.editor!.selection.active;

      const currentNode = assistService.tree.rootNode.descendantForPosition({
        row: position.line,
        column: position.character,
      });

      //   //   console.log(assistService.tree.rootNode.toString());

      console.log({
        //   rootNodetext: assistService.tree.rootNode.text,
        // rootNodetoString: assistService.tree.rootNode.toString(),
        currentNode: currentNode,
        currentNodetype: currentNode.type,
        currentNodetext: currentNode.text,
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
