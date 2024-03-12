import { Context, ExtendedSyntaxNode, ITypingAssist } from "../types";

/**
 * Ассист для нажатия ентра внутри комментариев
 */
export class CommentSeparator implements ITypingAssist {
  optionName: string = "CommentSeparator";

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
      changeEvent.contentChanges[0].rangeLength == 0 &&
      editor.selection.active.isEqual(
        changeEvent.contentChanges[0].range.start
      ) &&
      currentNode.type === "comment" &&
      currentNode.startPosition.column !== position.character
    );
  }
  async apply(context: Context): Promise<void> {
    const editor = context.editor;

    // штука чтобы позиция адекватно обновилась
    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(editor.selection.active, "");
      },
      { undoStopAfter: false, undoStopBefore: false }
    );

    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(editor.selection.active, "# ");
      },
      { undoStopAfter: false, undoStopBefore: false }
    );
  }
}
