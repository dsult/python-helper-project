import * as vscode from "vscode";
import { Context, ExtendedSyntaxNode, ITypingAssist } from "../types";
import { Point, SyntaxNode } from "web-tree-sitter";
import {
  getParentWithType,
  hasParentWithType,
  updateSelectionActive,
} from "../../TreeUtils";

/**
 * убирает отступ после ентра в конце ретерна. Работает только с пробелами((((
 */
export class ReturnDedent implements ITypingAssist {
  optionName: string = "ReturnDedent";
  private targetNode: SyntaxNode | null = null;

  isApplicable(context: Context): Boolean {
    const tree = context.tree;
    const editor = context.editor;
    const changeEvent = context.changeEvent;
    const position = editor.selection.active;

    // надо проверять самый левый символ
    const leftNode = tree.rootNode.descendantForPosition(
      {
        row: position.line,
        column: position.character - 1,
      },
      {
        row: position.line,
        column: position.character,
      }
    );

    if (
      changeEvent.contentChanges.length === 1 &&
      /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text) &&
      changeEvent.contentChanges[0].rangeLength === 0 &&
      editor.selection.active.isEqual(
        changeEvent.contentChanges[0].range.start
      ) &&
      hasParentWithType(leftNode, "return_statement") &&
      getParentWithType(leftNode, "return_statement")?.endIndex ===
        changeEvent.document.offsetAt(editor.selection.active)
    ) {
      this.targetNode = getParentWithType(leftNode, "return_statement");
      return true;
    } else {
      return false;
    }
  }
  async apply(context: Context): Promise<void> {
    const editor = context.editor;
    const changeEvent = context.changeEvent;
    let position = editor.selection.active;
    if (
      !this.targetNode ||
      this.targetNode.startPosition.column - 4 < 0 ||
      this.targetNode.hasError()
    ) {
      return;
    }

    // console.log("делейм дедент");
    // console.log(this.targetNode.startPosition.column - 4);
    const newStrStart = changeEvent.contentChanges[0].text.substring(
      0,
      this.targetNode.startPosition.column - 2
    );

    await updateSelectionActive(editor);

    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(
          new vscode.Range(
            position,
            changeEvent.document.positionAt(
              changeEvent.document.offsetAt(position) +
                changeEvent.contentChanges[0].text.length
            )
          ),
          newStrStart
        );
      },
      { undoStopAfter: false, undoStopBefore: false }
    );
  }
}
