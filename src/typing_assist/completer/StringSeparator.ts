import * as vscode from "vscode";
import { Context, ExtendedSyntaxNode, ITypingAssist } from "../types";
import { Point, SyntaxNode } from "web-tree-sitter";
import {
  getActiveDocumentIndentationType,
  hasParentWithType,
} from "../../TreeUtils";

/**
 * Ассист для нажатия ентра внутри строк
 */
export class StringSeparator implements ITypingAssist {
  optionName: string = "StringSeparator";

  readonly STRING_NODE_ID = 200;
  readonly QUOTE_NODE_ID = 100;
  readonly SPECIAL_CHARACTER_NODE_ID = 86;
  readonly BRACE_NODE_ID = 82;

  isApplicable(context: Context): Boolean {
    const tree = context.tree;
    const editor = context.editor;
    const changeEvent = context.changeEvent;
    const position = editor.selection.active;

    const currentNode = tree.rootNode.descendantForPosition({
      row: position.line,
      column: position.character,
    }) as ExtendedSyntaxNode;

    // проверка что это перенос строки + пробелы
    return !!(
      changeEvent.contentChanges.length === 1 &&
      /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text) &&
      changeEvent.contentChanges[0].rangeLength === 0 &&
      editor.selection.active.isEqual(
        changeEvent.contentChanges[0].range.start
      ) && // нода кавычка
      ((currentNode.typeId === this.QUOTE_NODE_ID &&
        currentNode.parent?.firstChild?.text &&
        this.isQuote(currentNode.parent.firstChild.text) &&
        !(
          currentNode.parent.startPosition.row === position.line &&
          currentNode.parent.startPosition.column === position.character
        ) &&
        !this.isCursorAfterRF(currentNode, position)) ||
        // нода строка
        (currentNode.typeId === this.STRING_NODE_ID &&
          currentNode.firstChild?.text &&
          this.isQuote(currentNode.firstChild.text)) ||
        // нода фигурная скобка
        (currentNode.typeId === this.BRACE_NODE_ID &&
          currentNode.parent?.parent?.firstChild?.text &&
          this.isFQuote(currentNode.parent.parent.firstChild.text)) ||
        // нода спец знак
        (currentNode.typeId === this.SPECIAL_CHARACTER_NODE_ID &&
          currentNode.parent?.firstChild?.text &&
          this.isQuote(currentNode.parent.firstChild.text) &&
          !this.isCursorAtSecondPos(currentNode, position)))
    );
  }
  async apply(context: Context): Promise<void> {
    const tree = context.tree;
    const editor = context.editor;
    const changeEvent = context.changeEvent;
    let position = editor.selection.active;

    const currentNode = tree.rootNode.descendantForPosition({
      row: position.line,
      column: position.character,
    }) as ExtendedSyntaxNode;

    if (position) {
      let stringNode: SyntaxNode;

      switch (currentNode.typeId) {
        case this.STRING_NODE_ID:
          stringNode = currentNode;
          break;
        case this.QUOTE_NODE_ID:
        case this.SPECIAL_CHARACTER_NODE_ID:
          stringNode = currentNode.parent!;
          break;
        case this.BRACE_NODE_ID:
          stringNode = currentNode.parent!.parent!;
          break;
        default:
          stringNode = currentNode;
          break;
      }

      let ofs1 = editor.document.offsetAt(position);
      let ofs2 = ofs1 + changeEvent.contentChanges[0].text.length;

      //   console.log(stringNode);

      const openQuoteText = stringNode.firstChild!.text;
      const closeQuoteText = stringNode.lastChild!.text;

      let columnOffset = stringNode.startPosition.column;

      if (
        stringNode.parent &&
        (stringNode.parent.type === "assignment" ||
          stringNode.parent.type === "return_statement" ||
          stringNode.parent.type === "augmented_assignment" ||
          stringNode.parent.type === "comparison_operator" ||
          stringNode.parent.type === "binary_operator") &&
        !(
          hasParentWithType(stringNode, "parenthesized_expression") ||
          hasParentWithType(stringNode, "argument_list")
        )
      ) {
        // parenthesized_expression
        // parenthesized_expression
        const pos1 = editor.document.positionAt(stringNode.startIndex);
        const pos2 = editor.document.positionAt(
          stringNode.endIndex + changeEvent.contentChanges[0].text.length
        );
        ofs1 += openQuoteText.length;
        ofs2 += closeQuoteText.length;
        columnOffset += 1;
        await editor.edit(
          (editBuilder) => {
            editBuilder.replace(new vscode.Range(pos1, pos1), "(");
          },
          { undoStopAfter: false, undoStopBefore: false }
        );
        await editor.edit(
          (editBuilder) => {
            editBuilder.replace(new vscode.Range(pos2, pos2), ")");
          },
          { undoStopAfter: false, undoStopBefore: false }
        );
      }

      const pos1 = editor.document.positionAt(ofs1);
      const pos2 = editor.document.positionAt(ofs2);

      await editor.edit(
        (editBuilder) => {
          editBuilder.replace(new vscode.Range(pos1, pos1), closeQuoteText);
        },
        { undoStopAfter: false, undoStopBefore: false }
      );

      await editor.edit(
        (editBuilder) => {
          editBuilder.replace(new vscode.Range(pos2, pos2), openQuoteText);
        },
        { undoStopAfter: false, undoStopBefore: false }
      );

      columnOffset -= changeEvent.contentChanges[0].text.length - 2;

      //   columnOffset =
      //     stringNode.startPosition.column -
      //     changeEvent.contentChanges[0].text.length +
      //     2;

      if (columnOffset < 0) {
        columnOffset = 0;
      }

      let replaceText: string;

      const indentationType = getActiveDocumentIndentationType();
      if (indentationType === "Tabs") {
        replaceText =
          "\t".repeat(columnOffset / 4) + " ".repeat(columnOffset % 4);
      } else {
        replaceText = " ".repeat(columnOffset);
      }
      //   console.log(editor.options.insertSpaces);

      await editor.edit(
        (editBuilder) => {
          editBuilder.replace(
            editor.selection.active.translate(0, -openQuoteText.length),
            replaceText
          );
        },
        { undoStopAfter: false, undoStopBefore: false }
      );

      //   await editor.edit(
      //     (editBuilder) => {
      //       editBuilder.replace(
      //         new vscode.Range(pos1, pos2),
      //         closeQuoteText + "\n" + " ".repeat(columnOffset) + openQuoteText
      //       );
      //     },
      //     { undoStopAfter: false, undoStopBefore: false }
      //   );
    }
  }

  isQuote = (text: string): boolean =>
    ["'", '"', "f'", 'f"', "r'", 'r"'].includes(text);
  isRFQuote = (text: string): boolean =>
    ["f'", 'f"', "r'", 'r"'].includes(text);
  isFQuote = (text: string): boolean => ["f'", 'f"'].includes(text);
  /**
   * Проверяет стоит ли курсор сразу после r/f, триситтер определяет это место как строку
   */
  isCursorAfterRF = (node: any, position: vscode.Position): boolean => {
    // Check if the node has an 'f' or 'r' prefix
    if (this.isRFQuote(node.text)) {
      // Check if the cursor is at that position
      return (
        position.character === node.startPosition.column + 1 &&
        node.parent.startPosition.row === position.line
      );
    }
    return false;
  };
  isCursorAtSecondPos = (node: any, position: vscode.Position): boolean => {
    // Проверяем, что позиция курсора равна начальной позиции узла плюс один символ
    return (
      position.character === node.startPosition.column + 1 &&
      position.line === node.startPosition.row
    );
  };
}
