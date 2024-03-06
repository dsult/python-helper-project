import * as vscode from "vscode";
import { Context, ITypingAssist } from "../types";
import { SyntaxNode } from "web-tree-sitter";
import {
  deleteSpacesAfterCoursor,
  getParentWithType,
  hasParentWithType,
  isPositionInsideNode,
} from "../../TreeUtils";

/**
 * Ассист для нажатия ентра внутри строк
 */
export class BracketingExpressionCompleter implements ITypingAssist {
  optionName: string = "bracketingExpressionCompleter";

  /**
   * нода, которую мы собираемся оборачивать в скобки
   */
  targetNode: SyntaxNode | null = null;

  isApplicable(context: Context): Boolean {
    const editor = context.editor;
    const changeEvent = context.changeEvent;

    if (
      !(
        changeEvent.contentChanges.length === 1 &&
        /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text) &&
        changeEvent.contentChanges[0].rangeLength == 0 &&
        editor.selection.active.isEqual(
          changeEvent.contentChanges[0].range.start
        )
      )
    ) {
      return false;
    }

    const position = editor.selection.active;
    const tree = context.tree;
    const currentNode = tree.rootNode.descendantForPosition({
      row: position.line,
      column: position.character,
    });

    if (hasParentWithType(currentNode, "expression_statement")) {
      let targetParentNode = getParentWithType(
        currentNode,
        "expression_statement"
      );

      if (
        targetParentNode === null ||
        !targetParentNode.firstChild?.lastChild
      ) {
        return false;
      }
      this.targetNode = targetParentNode.firstChild.lastChild;
    } else if (hasParentWithType(currentNode, "return_statement")) {
      let targetParentNode = getParentWithType(currentNode, "return_statement");

      if (targetParentNode === null || !targetParentNode.lastChild) {
        return false;
      }
      this.targetNode = targetParentNode.lastChild;
    } else {
      return false;
    }

    // этот кусок выглядит ненадежным, перебрать все возможные ноды,
    // в которых не нужно делать перенос будет не так просто

    const positionOffset = editor.document.offsetAt(position);
    const solidThingTypes = [
      "integer",
      "identifier",
      "float",
      //   "string",
    ];
    const isCoursorInsideSolidThing = !!(
      currentNode.startIndex !== positionOffset &&
      solidThingTypes.includes(currentNode.type)
    );

    return !!(
      isPositionInsideNode(position, this.targetNode) &&
      !hasParentWithType(currentNode, "parenthesized_expression") &&
      !hasParentWithType(currentNode, "argument_list") &&
      !isCoursorInsideSolidThing
    );
  }
  async apply(context: Context): Promise<void> {
    const editor = context.editor;
    const changeEvent = context.changeEvent;

    if (!this.targetNode) {
      return;
    }

    let pos1 = editor.document.positionAt(this.targetNode.startIndex);
    let pos2 = editor.document.positionAt(
      this.targetNode.endIndex + changeEvent.contentChanges[0].text.length
    );

    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(pos1, "(");
      },
      { undoStopAfter: false, undoStopBefore: false }
    );

    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(pos2, ")");
      },
      { undoStopAfter: false, undoStopBefore: false }
    );

    let columnOffset =
      this.targetNode.startPosition.column -
      changeEvent.contentChanges[0].text.length +
      3;

    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(editor.selection.active, " ".repeat(columnOffset));
      },
      { undoStopAfter: false, undoStopBefore: false }
    );

    // тут типо вызывается функция которая пробелы после курсора до непробельного символа
    await deleteSpacesAfterCoursor(editor);
  }
}
