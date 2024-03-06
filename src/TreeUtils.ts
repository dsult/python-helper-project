import { Point, SyntaxNode } from "web-tree-sitter";
import * as vscode from "vscode";

/**
 * Проверяет наличие ноды с определенным типом в родительских нодах относительно целевой ноды.
 * @param targetNode Целевая нода, относительно которой производится проверка.
 * @param type Тип ноды, который необходимо найти среди родительских нод.
 * @returns true, если нода с заданным типом найдена среди родительских нод; в противном случае - false.
 */
export function hasParentWithType(
  targetNode: SyntaxNode,
  type: string
): boolean {
  let parent = targetNode.parent;
  while (parent !== null) {
    if (parent.type === type) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}
export function getParentWithType(
  targetNode: SyntaxNode,
  type: string
): SyntaxNode | null {
  let parent = targetNode.parent;
  while (parent !== null) {
    if (parent.type === type) {
      break;
    }
    parent = parent.parent;
  }
  return parent;
}

export function convertToPosition(point: Point): vscode.Position {
  return new vscode.Position(point.row, point.column);
}

/**
 * Проверяет, находится ли позиция внутри указанной ноды.
 * @param position Позиция, которую нужно проверить.
 * @param targetNode Нода, внутри которой нужно проверить позицию.
 * @returns true, если позиция находится внутри ноды; в противном случае - false.
 */
export function isPositionInsideNode(
  position: vscode.Position,
  targetNode: SyntaxNode
): boolean {
  // Получаем координаты начала и конца ноды
  const start = targetNode.startPosition;
  const end = targetNode.endPosition;

  // Проверяем, находится ли позиция внутри диапазона ноды
  return (
    position.isAfterOrEqual(convertToPosition(start)) &&
    position.isBeforeOrEqual(convertToPosition(end))
  );
}

/**
 * Асинхронно удаляет пробелы после позиции курсора в текстовом редакторе.
 * @param editor Редактор текста, в котором нужно удалить пробелы.
 * @returns Промис, который разрешается после завершения операции удаления пробелов.
 */
export async function deleteSpacesAfterCoursor(
  editor: vscode.TextEditor
): Promise<void> {
  let text = editor.document.getText();
  let startIndex = editor.document.offsetAt(editor.selection.active);

  // Переменная для подсчета пробелов
  let spaceCount = 0;

  // Проходим по символам текста, начиная с startIndex
  for (let i = startIndex; i < text.length; i++) {
    // Если символ - пробел, увеличиваем счетчик
    if (text[i] === " ") {
      spaceCount++;
    } else {
      // Если найден символ, не являющийся пробелом, выходим из цикла
      break;
    }
  }
  if (spaceCount === 0) {
    return;
  }

  await editor.edit(
    (editBuilder) => {
      editBuilder.replace(
        new vscode.Range(
          editor.selection.active,
          editor.selection.active.translate(0, spaceCount)
        ),
        ""
      );
    },
    { undoStopAfter: false, undoStopBefore: false }
  );
}
