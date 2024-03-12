import * as vscode from "vscode";
import { Context, ExtendedSyntaxNode, ITypingAssist } from "../types";
import { getDocstringSnippet } from "./utuls/DocstringSnippetMaker";

/**
 * Автоматическая док строка (для функций)
 */
export class DocstringCompleter implements ITypingAssist {
  optionName: string = "DocstringCompleter";

  readonly QUOTE_NODE_ID = 100;

  isApplicable(context: Context): Boolean {
    const tree = context.tree;
    const editor = context.editor;
    const changeEvent = context.changeEvent;

    let position = editor.selection.active;

    const currentNode = tree.rootNode.descendantForPosition({
      row: position.line,
      column: position.character,
    }) as ExtendedSyntaxNode;

    return !!(
      changeEvent.contentChanges.length === 1 &&
      /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text) &&
      changeEvent.contentChanges[0].rangeLength == 0 &&
      // проверка что мы внутри тройной докстроки
      currentNode.typeId === this.QUOTE_NODE_ID &&
      currentNode.parent !== null &&
      this.isEmptyTripleQuoteString(currentNode.parent.text) &&
      this.isCursorInMiddle(currentNode.parent, position) &&
      editor.selection.active.isEqual(changeEvent.contentChanges[0].range.start)
    );
  }

  async apply(context: Context): Promise<void> {
    const tree = context.tree;
    const editor = context.editor;

    let position = editor.selection.active;

    const currentNode = tree.rootNode.descendantForPosition({
      row: position.line,
      column: position.character,
    });

    const DocstringFormat = vscode.workspace
      .getConfiguration()
      .get("typing-assist.docstringFormat");

    if (
      currentNode.parent?.parent?.parent?.parent?.type ==
        "function_definition" &&
      // (может ли тут быть обращение к несуществующему элементу???)
      currentNode.parent.parent.parent.parent.children[2].type ==
        "parameters" &&
      // проверка что перед стрингой нет ничего в теле функции
      currentNode.parent.parent.previousSibling === null &&
      // в случае плейна доп. сниппет не нужен
      DocstringFormat !== "Plain"
    ) {
      const parameters =
        currentNode.parent.parent.parent.parent.namedChildren[1]?.namedChildren;

      const snippet = getDocstringSnippet(parameters, currentNode);

      await editor.insertSnippet(
        new vscode.SnippetString("\n"),
        editor.selection.active,
        { undoStopBefore: false, undoStopAfter: false }
      );

      await editor.insertSnippet(
        new vscode.SnippetString(snippet),
        editor.selection.active,
        { undoStopBefore: true, undoStopAfter: true }
      );
      // await editor.insertSnippet(new vscode.SnippetString('$0'));
    } else {
      await editor.insertSnippet(
        new vscode.SnippetString("\n"),
        editor.selection.active,
        { undoStopBefore: false, undoStopAfter: false }
      );
    }
  }

  private isEmptyTripleQuoteString = (text: string): boolean =>
    ["''''''", '""""""'].includes(text);
  private isCursorInMiddle = (
    node: any,
    position: vscode.Position
  ): boolean => {
    // Проверяем, что курсор посередине пустого докстринга
    return (
      position.character === node.startPosition.column + 3 &&
      position.line === node.startPosition.row
    );
  };
}
