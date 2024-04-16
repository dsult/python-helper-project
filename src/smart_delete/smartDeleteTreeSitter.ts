import { convertToPosition } from "../TreeUtils";
import { TypeAssistService } from "../typing_assist/TypeAssistService";
import * as vscode from "vscode";
import {
  findPreviousPosition,
  findFirstNonWhitespaceCharPositionToLeft,
  findFirstNonWhitespaceCharPositionToRight,
} from "./utils";

export function smartDeleteTreeSitter(
  assistService: TypeAssistService
): (...args: any[]) => any {
  return async () => {
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

    const currentNode = assistService.tree.rootNode.namedDescendantForPosition(
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
        leftDeletePosition = convertToPosition(
          currentNode.parent.startPosition
        );
        rightDeletePosition = convertToPosition(currentNode.endPosition);
        break;

      case currentNode.parent &&
        currentNode.previousNamedSibling &&
        (currentNode.parent.type === "binary_operator" ||
          currentNode.parent.type === "argument_list" ||
          currentNode.parent.type === "parameters" ||
          // currentNode.parent.type === "assignment" ||
          currentNode.parent.type === "tuple"):
        leftDeletePosition = convertToPosition(
          currentNode.previousNamedSibling.endPosition
        );
        rightDeletePosition = convertToPosition(currentNode.endPosition);
        break;

      case currentNode.type === "argument_list" &&
        currentNode.previousNamedSibling?.type === "identifier":
        leftDeletePosition = convertToPosition(
          currentNode.previousNamedSibling.startPosition
        );
        rightDeletePosition = convertToPosition(currentNode.endPosition);

        break;

      default:
        //   console.log(123);
        //   console.log(currentNode);
        leftDeletePosition = convertToPosition(currentNode.startPosition);
        rightDeletePosition = convertToPosition(currentNode.endPosition);
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
  };
}
