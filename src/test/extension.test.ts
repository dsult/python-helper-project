import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
import { CommentSeparator } from "../typing_assist/completer/CommentSeparator";
// import * as myExtension from '../../extension';

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});

describe("CommentSeparator", () => {
  let commentSeparator: CommentSeparator;
  let mockContext: {};

  beforeEach(() => {
    commentSeparator = new CommentSeparator();
    // Здесь нужно создать моки для context, editor, tree и changeEvent
    mockContext = {
      // ... ваш код для создания мока context
    };
  });

  test("isApplicable should return true for enter inside a comment", () => {
    // Настройте mockContext так, чтобы он соответствовал сценарию ввода Enter внутри комментария
    assert.strictEqual(commentSeparator.isApplicable(mockContext), true);
  });

  test("isApplicable should return false for enter outside a comment", () => {
    // Настройте mockContext так, чтобы он соответствовал сценарию ввода Enter вне комментария
    assert.strictEqual(commentSeparator.isApplicable(mockContext), false);
  });

  // Дополнительные тесты для других сценариев...
});

function makeContext(code, cursorPosition, changeText) {
  // Создаем мок для дерева разбора (tree)
  const mockTree = {
    rootNode: {
      descendantForPosition: jest.fn(() => ({
        type: "comment",
        startPosition: { column: cursorPosition.start },
        endPosition: { column: cursorPosition.end },
      })),
    },
  };

  // Создаем мок для редактора
  const mockEditor = {
    selection: {
      active: {
        line: cursorPosition.line,
        character: cursorPosition.character,
        isEqual: jest.fn((position) => position.isEqual(cursorPosition)),
      },
    },
    edit: jest.fn((callback) => {
      // Здесь вы можете имитировать изменение документа
    }),
  };

  // Создаем мок для события изменения документа
  const mockChangeEvent = {
    contentChanges: [
      {
        text: changeText,
        rangeLength: 0,
        range: {
          start: cursorPosition,
        },
      },
    ],
  };

  // Возвращаем мок контекста
  return {
    tree: mockTree,
    editor: mockEditor,
    changeEvent: mockChangeEvent,
    // Добавьте другие необходимые свойства и методы
  };
}

// Пример использования makeContext
const mockContext = makeContext(
  "# some comment\na = 4", // Код
  { line: 0, character: 12, start: 12, end: 13 }, // Позиция курсора
  "\n" // Текст изменения
);
