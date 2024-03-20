import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { BracketingExpressionCompleter } from "./typing_assist/completer/BracketingExpressionCompleter";
import { NewlineSpaceRemover } from "./typing_assist/completer/NewlineSpaceRemover";
import { SyntaxNode } from "web-tree-sitter";
import { CommentSeparator } from "./typing_assist/completer/CommentSeparator";
import { ReturnDedent } from "./typing_assist/completer/ReturnDedent";
import { Position } from "vscode";
const fs = require("fs");

let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {
  const assistService = await TypeAssistService.init([
    new StringSeparator(),
    new DocstringCompleter(),
    new FunctionCompleter(),
    new BracketingExpressionCompleter(),
    new NewlineSpaceRemover(),
    new CommentSeparator(),
    new ReturnDedent(),
  ]);

  vscode.window.onDidChangeActiveTextEditor((e) => assistService.changeDoc(e));

  disposable = vscode.workspace.onDidChangeTextDocument((e) => {
    // console.log(e);
    // e -> TypingAssistData
    assistService.processing(e);
    assistService.updateTree(e);
  });

  context.subscriptions.push(disposable);

  // отладочная штука
  disposable = vscode.commands.registerCommand(
    "python-helper-project.test",
    async () => {
      // Путь к файлу, который нужно прочитать
      const filePath = __dirname + "/test1.txt";

      // Переменная для хранения содержимого файла
      let fileContent = "";
      // Чтение файла
      async function readFileContent(filePath: string): Promise<string> {
        try {
          const data = await fs.readFile(filePath, "utf8");
          console.log(data);
          return data;
        } catch (err) {
          console.error("Ошибка при чтении файла:", err);
          throw err; // Перебрасываем ошибку дальше, если нужно обработать её выше по стеку вызовов
        }
      }

      // Пример использования функции
      readFileContent(filePath)
        .then((content) => {
          console.log(content);
        })
        .catch((error) => {
          // Обработка ошибок чтения файла
        });
      // Разделяем текст на две части
      //   const [startPart, endPart] = fileContent.split("-------------------\r\n");
      //   console.log(startPart);
      //   console.log(endPart);
      //   console.log(123);

      //   // Функция для поиска и удаления тега, возвращает позицию тега и текст без тега
      //   function extractTag(
      //     text: string,
      //     tag: string
      //   ): { position: Position; textWithoutTag: string } {
      //     const tagIndex = text.indexOf(`<${tag}>`);
      //     if (tagIndex === -1) {
      //       throw new Error(`Tag <${tag}> not found`);
      //     }

      //     // Вычисляем позицию тега
      //     const linesBeforeTag = text.slice(0, tagIndex).split("\n");
      //     const line = linesBeforeTag.length - 1;
      //     const character = linesBeforeTag[linesBeforeTag.length - 1].length;

      //     // Удаляем тег из текста
      //     const textWithoutTag = text.replace(`<${tag}>`, "");

      //     return {
      //       position: new Position(line, character),
      //       textWithoutTag,
      //     };
      //   }

      //   // Извлекаем тег <\n> из первой части и запоминаем позицию
      //   const { position: insertPosition, textWithoutTag: startText } =
      //     extractTag(startPart, "\\n");

      //   // Извлекаем тег <caret> из второй части и запоминаем позицию
      //   const { position: caretPosition, textWithoutTag: endTextWithoutTag } =
      //     extractTag(endPart, "caret");

      //   // Корректируем текст второй части, добавляя перевод строки в позицию вставки
      //   const endTextLines = endTextWithoutTag.split("\n");
      //   endTextLines.splice(
      //     insertPosition.line,
      //     0,
      //     insertPosition.character === 0
      //       ? ""
      //       : " ".repeat(insertPosition.character)
      //   );
      //   const endText = endTextLines.join("\r\n");

      //   // Создаем объект с результатами
      //   const obj = {
      //     startText,
      //     endText,
      //     insertPosition,
      //     insertText: "\n",
      //     caretPosition: new Position(
      //       caretPosition.line + 1,
      //       caretPosition.character
      //     ), // Учитываем новую строку после разделителя
      //   };

      //   console.log(obj);

      //   const editor = assistService.editor!;
      //   const position = editor.selection.active;
      //   const currentNode = assistService.tree.rootNode.descendantForPosition({
      //     row: position.line,
      //     column: position.character,
      //   });
      //   console.log(currentNode);
    }
  );
  context.subscriptions.push(disposable);

  setContextByConfiguration(
    "typing-assist.isCursorDownAfterCommentLineOn",
    "typing-assist.enableCursorDownAfterCommentLine"
  );

  vscode.workspace.onDidChangeConfiguration((event) => {
    if (
      event.affectsConfiguration(
        "typing-assist.enableCursorDownAfterCommentLine"
      )
    ) {
      setContextByConfiguration(
        "typing-assist.isCursorDownAfterCommentLineOn",
        "typing-assist.enableCursorDownAfterCommentLine"
      );
    }
  });
}

async function fillTreeSitterMissingNodes(assistService: TypeAssistService) {
  const missingNodes: SyntaxNode[] = [];

  function traverseTree(node: SyntaxNode): void {
    node.children.forEach((n: SyntaxNode) => {
      if (n.isMissing()) {
        missingNodes.push(n);
      }
      traverseTree(n);
    });
  }

  traverseTree(assistService.tree.rootNode);

  const editor = vscode.window.activeTextEditor;
  const document = vscode.workspace.textDocuments[0];

  console.log(missingNodes);

  const edits: { position: vscode.Position; newText: string }[] = [];

  missingNodes.forEach((missingNode: SyntaxNode) => {
    const position = document.positionAt(missingNode.startIndex);
    edits.push({ position, newText: missingNode.type });
  });

  await editor?.edit(
    (editBuilder) => {
      edits.forEach(({ position, newText }) => {
        editBuilder.replace(position, newText);
      });
    },
    { undoStopAfter: false, undoStopBefore: false }
  );
}

function setContextByConfiguration(context: string, configuration: string) {
  const config = vscode.workspace.getConfiguration().get(configuration);

  vscode.commands.executeCommand("setContext", context, config);
}

export function deactivate() {}
