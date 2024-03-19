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
 * оборачивает выражение в скобки при нажатии ентра если это нужно
 */
export class BracketingExpressionCompleter implements ITypingAssist {
  optionName: string = "BracketingExpressionCompleter";

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
      // "string"
    ];
    const isCoursorInsideSolidThing = !!(
      currentNode.startIndex !== positionOffset &&
      solidThingTypes.includes(currentNode.type)
    );

    const blackListOfLastChars = ["/", "*", "-", "+", "=", ">", "<", "\\", ","];

    return !!(
      isPositionInsideNode(position, this.targetNode) &&
      !hasParentWithType(currentNode, "parenthesized_expression") &&
      !hasParentWithType(currentNode, "argument_list") &&
      //   !hasParentWithType(currentNode, "call") &&
      !hasParentWithType(currentNode, "list") &&
      !hasParentWithType(currentNode, "dictionary") &&
      !isCoursorInsideSolidThing &&
      !blackListOfLastChars.includes(
        getLastNonSpaceCharacterInCurrentAndNextLine(
          editor.document,
          this.targetNode.startPosition.row
        )
      )
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

    await deleteSpacesAfterCoursor(editor);
  }
}

/**
 * Возвращает последний непробельный символ в строке.
 * @param document Текстовый документ, в котором находится строка.
 * @param lineNumber Номер строки, для которой нужно найти последний непробельный символ.
 * @returns Последний непробельный символ в строке или "", если строка пуста или состоит только из пробелов.
 */
function getLastNonSpaceCharacterInLine(
  document: vscode.TextDocument,
  lineNumber: number
): string {
  const line = document.lineAt(lineNumber);
  const lineText = line.text;

  // Итерируемся с конца строки
  for (let i = lineText.length - 1; i >= 0; i--) {
    const char = lineText.charAt(i);
    if (char !== " " && char !== "\t") {
      return char;
    }
  }

  // Если строка пуста или состоит только из пробелов, возвращаем null
  return "";
}

/**
 * Возвращает последний непробельный символ в текущей строке и следующей строке.
 * @param document Текстовый документ, в котором находится строка.
 * @param lineNumber Номер текущей строки, для которой нужно найти последний непробельный символ вместе со следующей строкой.
 * @returns Последний непробельный символ в строке или "", если строки пусты или состоят только из пробелов.
 */
function getLastNonSpaceCharacterInCurrentAndNextLine(
  document: vscode.TextDocument,
  lineNumber: number
): string {
  // Получаем текущую строку
  const currentLine = document.lineAt(lineNumber);
  const currentLineText = currentLine.text;

  // Получаем следующую строку, если она есть
  const nextLineNumber = lineNumber + 1;
  if (nextLineNumber >= document.lineCount) {
    return getLastNonSpaceCharacterInLine(document, lineNumber);
  }
  const nextLine = document.lineAt(nextLineNumber);
  const nextLineText = nextLine.text;

  // Конкатенируем содержимое текущей и следующей строки
  const concatenatedText =
    currentLineText.trimRight() + nextLineText.trimLeft();

  // Итерируемся с конца объединенной строки
  for (let i = concatenatedText.length - 1; i >= 0; i--) {
    const char = concatenatedText.charAt(i);
    if (char !== " " && char !== "\t") {
      return char;
    }
  }

  // Если строка пуста или состоит только из пробелов, возвращаем пустую строку
  return "";
}
