import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { BracketingExpressionCompleter } from "./typing_assist/completer/BracketingExpressionCompleter";
import { NewlineSpaceRemover } from "./typing_assist/completer/NewlineSpaceRemover";
import { SyntaxNode } from "web-tree-sitter";
import { CommentSeparator } from "./typing_assist/completer/CommentSeparator";
import { ReturnDedent } from "./typing_assist/completer/ReturnDedent";

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
      const currentNode = assistService.tree.rootNode.descendantForPosition({
        row: position.line,
        column: position.character,
      });
      console.log(currentNode);
      console.log(assistService.tree.rootNode);
    }
  );
  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    "python-helper-project.newDelete",
    async () => {
      const editor = assistService.editor!;
      const position = editor.selection.active;

      if (position.character === 0) {
        vscode.commands.executeCommand("deleteWordLeft");
        return;
      }

      const currentNode = assistService.tree.rootNode.descendantForPosition(
        {
          row: position.line,
          column: position.character - 1,
        },
        {
          row: position.line,
          column: position.character,
        }
      );

      const leftPosition = position.translate(0, -1);
      const leftCharacter = editor.document.getText(
        new vscode.Range(leftPosition, position)
      );

      if (
        leftCharacter === " " ||
        !(currentNode.previousNamedSibling && currentNode.parent)
      ) {
        vscode.commands.executeCommand("deleteWordLeft");
        return;
      }

      console.log(currentNode.type);
      console.log(currentNode.parent.type);

      if (
        currentNode.parent.type === "binary_operator" ||
        currentNode.parent.type === "assignment" ||
        currentNode.parent.type === "parameters" ||
        currentNode.parent.type === "tuple" ||
        currentNode.parent.type === "argument_list"
      ) {
        await editor.edit(
          (editBuilder) => {
            if (currentNode.previousNamedSibling) {
              editBuilder.replace(
                new vscode.Range(
                  new vscode.Position(
                    currentNode.previousNamedSibling.endPosition.row,
                    currentNode.previousNamedSibling.endPosition.column
                  ),
                  editor.selection.active
                ),
                ""
              );
            }
          },
          { undoStopAfter: false, undoStopBefore: false }
        );

        return;
      } else {
        vscode.commands.executeCommand("deleteWordLeft");
        return;
      }
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

async function fillTreeSitterMissingNodes(assistService: TypeAssistService) {
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
}

function setContextByConfiguration(context: string, configuration: string) {
  const config = vscode.workspace.getConfiguration().get(configuration);

  vscode.commands.executeCommand("setContext", context, config);
}

export function deactivate() {}
