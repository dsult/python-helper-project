import { Context, ITypingAssist } from "../types";
import { deleteSpacesAfterCoursor, hasParentWithType } from "../../TreeUtils";

/**
 * Ассист для нажатия ентра внутри строк
 */
export class NewlineSpaceRemover implements ITypingAssist {
  optionName: string = "newlineSpaceRemover";

  isApplicable(context: Context): Boolean {
    const editor = context.editor;
    const changeEvent = context.changeEvent;

    const position = editor.selection.active;
    const tree = context.tree;
    const currentNode = tree.rootNode.descendantForPosition({
      row: position.line,
      column: position.character,
    });

    return !!(
      changeEvent.contentChanges.length === 1 &&
      /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text) &&
      changeEvent.contentChanges[0].rangeLength == 0 &&
      editor.selection.active.isEqual(
        changeEvent.contentChanges[0].range.start
      ) &&
      (hasParentWithType(currentNode, "parenthesized_expression") ||
        hasParentWithType(currentNode, "call") ||
        hasParentWithType(currentNode, "argument_list"))
    );
  }
  async apply(context: Context): Promise<void> {
    let editor = context.editor;

    // тут типо вызывается функция которая пробелы после курсора до непробельного символа
    await deleteSpacesAfterCoursor(editor);
  }
}
