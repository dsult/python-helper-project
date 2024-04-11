import * as vscode from "vscode";

export function findPreviousPosition(
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

export function findFirstNonWhitespaceCharPositionToLeft(
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

export function findFirstNonWhitespaceCharPositionToRight(
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
