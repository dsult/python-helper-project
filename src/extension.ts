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
      const editor = assistService.editor;

      if (!editor) {
        // await vscode.commands.executeCommand("deleteWordLeft");
        return;
      }

      const position = editor.selection.active;
      const leftPosition = findPreviousPosition(editor, position);

      const leftCharacter = editor.document.getText(
        new vscode.Range(leftPosition, position)
      );

      const currentNode =
        assistService.tree.rootNode.namedDescendantForPosition(
          {
            row: position.line,
            column: position.character - 1,
          },
          {
            row: position.line,
            column: position.character,
          }
        );

      if (currentNode.hasError()) {
        await vscode.commands.executeCommand("deleteWordLeft");
        return;
      }
      let leftDeletePosition: vscode.Position;
      let rightDeletePosition = position;

      switch (true) {
        case leftCharacter === " " ||
          leftCharacter === "\t" ||
          leftCharacter === "\n" || // (для линукса???)
          leftCharacter === "\r\n":
          leftDeletePosition = findFirstNonWhitespaceCharPositionToLeft(
            editor,
            position
          );

          if (currentNode.namedChildCount === 0) {
            rightDeletePosition = findFirstNonWhitespaceCharPositionToRight(
              editor,
              position
            );
          }

          break;

        case currentNode.parent?.type === "decorator":
          leftDeletePosition = new vscode.Position(
            currentNode.parent.startPosition.row,
            currentNode.parent.startPosition.column
          );
          break;

        case currentNode.parent &&
          currentNode.previousNamedSibling &&
          (currentNode.parent.type === "binary_operator" ||
            currentNode.parent.type === "argument_list" ||
            currentNode.parent.type === "parameters" ||
            // currentNode.parent.type === "assignment" ||
            currentNode.parent.type === "tuple"):
          leftDeletePosition = new vscode.Position(
            currentNode.previousNamedSibling.endPosition.row,
            currentNode.previousNamedSibling.endPosition.column
          );
          break;

        case currentNode.type === "argument_list" &&
          currentNode.previousNamedSibling?.type === "identifier":
          leftDeletePosition = new vscode.Position(
            currentNode.previousNamedSibling.startPosition.row,
            currentNode.previousNamedSibling.startPosition.column
          );
          break;

        default:
          //   console.log(123);
          //   console.log(currentNode);

          leftDeletePosition = new vscode.Position(
            currentNode.startPosition.row,
            currentNode.startPosition.column
          );
          break;
      }
      await editor.edit(
        (editBuilder) => {
          editBuilder.replace(
            new vscode.Range(leftDeletePosition, rightDeletePosition),
            ""
          );
        },
        { undoStopAfter: false, undoStopBefore: false }
      );

      return;
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

function findPreviousPosition(
  editor: vscode.TextEditor,
  position: vscode.Position
): vscode.Position {
  const offset = editor.document.offsetAt(position);
  if (offset > 0) {
    return editor.document.positionAt(offset - 1);
  } else {
    return position;
  }
}

function findFirstNonWhitespaceCharPositionToLeft(
  editor: vscode.TextEditor,
  position: vscode.Position
) {
  let lineNum = position.line;
  let charPos = position.character;

  while (lineNum >= 0) {
    let lineText = editor.document.lineAt(lineNum).text;

    // Перемещаемся влево по текущей строке
    while (charPos > 0) {
      charPos--;
      if (!/\s/.test(lineText[charPos])) {
        // Нашли непробельный символ
        return new vscode.Position(lineNum, charPos + 1);
      }
    }

    // Если мы достигли начала строки, переходим к предыдущей
    if (lineNum > 0) {
      lineNum--;
      charPos = editor.document.lineAt(lineNum).text.length;
    } else {
      // Мы в начале документа и не нашли непробельных символов
      return new vscode.Position(0, 0);
    }
  }

  return position; // Непробельных символов не найдено во всем документе
}
function findFirstNonWhitespaceCharPositionToRight(
  editor: vscode.TextEditor,
  position: vscode.Position
) {
  let lineNum = position.line;
  let charPos = position.character;
  let doc = editor.document;
  let totalLines = doc.lineCount;

  while (lineNum < totalLines) {
    let lineText = doc.lineAt(lineNum).text;
    let lineLength = lineText.length;

    // Перемещаемся вправо по текущей строке
    while (charPos < lineLength) {
      if (!/\s/.test(lineText[charPos])) {
        // Нашли непробельный символ
        return new vscode.Position(lineNum, charPos);
      }
      charPos++;
    }

    // Если мы достигли конца строки, переходим к следующей
    lineNum++;
    charPos = 0;
  }

  return position; // Непробельных символов не найдено во всем документе
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
