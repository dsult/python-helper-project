import assert from "assert";
import {
  TextEditor,
  TextDocument,
  workspace,
  window,
  Selection,
  SnippetString,
  Disposable,
  commands,
} from "vscode";
import { DeferredPromise, createRandomFile, deleteFile } from "./utils";
import { TypeAssistService } from "../typing_assist/TypeAssistService";
import { BracketingExpressionCompleter } from "../typing_assist/completer/BracketingExpressionCompleter";
import { CommentSeparator } from "../typing_assist/completer/CommentSeparator";
import { DocstringCompleter } from "../typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "../typing_assist/completer/FunctionCompleter";
import { NewlineSpaceRemover } from "../typing_assist/completer/NewlineSpaceRemover";
import { ReturnDedent } from "../typing_assist/completer/ReturnDedent";
import { StringSeparator } from "../typing_assist/completer/StringSeparator";
import { updateSelectionActive } from "../TreeUtils";

const fs = require("fs");
const path = require("path");

function readFile(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(
      filePath,
      "utf8",
      (err: any, data: string | PromiseLike<string>) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      }
    );
  });
}

export async function readTestFile(filePath: string) {
  let data = await readFile(filePath);

  // Разделяем текст на две части
  const [startPart, endPart] = data.split("\r\n-------------------\r\n");

  // Функция для поиска и удаления тега, возвращает офсет тега и текст без тега
  function extractTag(
    text: string,
    tag: string
  ): { offset: number; textWithoutTag: string } {
    const tagIndex = text.indexOf(`<${tag}>`);
    if (tagIndex === -1) {
      throw new Error(`Tag <${tag}> not found`);
    }

    // Удаляем тег из текста
    const textWithoutTag = text.replace(`<${tag}>`, "");

    return {
      offset: tagIndex,
      textWithoutTag,
    };
  }

  function getContentBetweenAngleBrackets(input: string): string {
    const startIndex = input.indexOf("<");
    if (startIndex === -1) {
      throw new Error(`symbol < not found`);
    }
    const endIndex = input.indexOf(">", startIndex + 1);
    if (endIndex === -1) {
      throw new Error(`symbol > not found`);
    }
    return input.substring(startIndex + 1, endIndex);
  }

  let insertText = getContentBetweenAngleBrackets(startPart);
  const { offset: insertOffset, textWithoutTag: startText } = extractTag(
    startPart,
    insertText
  );

  if (insertText === "\\n") {
    insertText = "\n";
  }
  // Извлекаем тег <caret> из второй части и запоминаем позицию
  const { offset: caretOffset, textWithoutTag: endText } = extractTag(
    endPart,
    "caret"
  );

  // Создаем объект с результатами
  const obj = {
    startText,
    endText,
    insertOffset,
    caretOffset,
    insertText,
  };
  return obj;
}

export function getFoldersAndFiles(directoryPath: string) {
  const result: any = {};

  // Получаем список файлов и папок в указанной директории
  const items = fs.readdirSync(directoryPath, { withFileTypes: true });

  items.forEach((item: { isDirectory: () => any; name: string | number }) => {
    if (item.isDirectory()) {
      // Если это папка, получаем список файлов внутри нее
      const folderPath = path.join(directoryPath, item.name);
      const files = fs.readdirSync(folderPath);
      result[item.name] = files;
    }
  });

  return result;
}

// const directoryPath = __dirname + "/typing_assist_test";
// const foldersAndFiles = getFoldersAndFiles(directoryPath);
// console.log(foldersAndFiles);
export async function withRandomFileEditor(
  initialContents: string,
  run: (editor: TextEditor, doc: TextDocument) => Thenable<void>
): Promise<boolean> {
  const file = await createRandomFile(initialContents, undefined, ".py");
  const doc = await workspace.openTextDocument(file);
  const editor = await window.showTextDocument(doc);
  await run(editor, doc);

  if (doc.isDirty) {
    return doc.save().then((saved) => {
      assert.ok(saved);
      assert.ok(!doc.isDirty);
      return deleteFile(file);
    });
  } else {
    return deleteFile(file);
  }
}

export function makeAssistSuite(
  suiteName: string,
  testNames: any[],
  targetDir = __dirname + "/typing_assist"
) {
  suite(suiteName, () => {
    let assistService: TypeAssistService;

    setup(async () => {
      assistService = await TypeAssistService.init([
        new StringSeparator(),
        new DocstringCompleter(),
        new FunctionCompleter(),
        new BracketingExpressionCompleter(),
        new NewlineSpaceRemover(),
        new CommentSeparator(),
        new ReturnDedent(),
      ]);
      window.onDidChangeActiveTextEditor((e) => assistService.changeDoc(e));
    });

    testNames.forEach((testName: any) => {
      // const testName = testNames
      test(testName, async () => {
        const filePath = targetDir + "/" + suiteName + "/" + testName;
        const obj = await readTestFile(filePath);

        const startText = obj.startText;
        const endText = obj.endText;
        const offset = obj.insertOffset;
        const insertText = obj.insertText;
        const caretOffset = obj.caretOffset;

        if (!assistService) {
          throw new Error("TypeAssistService is not initialized.");
        }
        return withRandomFileEditor(startText, async (editor, doc) => {
          const insertPosition = editor.document.positionAt(offset);
          editor.selection = new Selection(insertPosition, insertPosition);

          const finishedPromise = new DeferredPromise<void>();

          let changeDocumentSubscription: Disposable;

          changeDocumentSubscription = workspace.onDidChangeTextDocument(
            async (e) => {
              changeDocumentSubscription.dispose();
              try {
                await assistService.processing(e);

                assert.strictEqual(doc.getText(), endText);
                assert.strictEqual(
                  doc.offsetAt(editor.selection.active),
                  caretOffset,
                  "caret position"
                );
                assert.ok(doc.isDirty);
                finishedPromise.complete();
              } catch (error) {
                finishedPromise.error(error);
              }
            }
          );

          await editor.insertSnippet(new SnippetString(insertText));

          await finishedPromise.p;
        });
      });
    });
  });
}
export function makeCommandSuite(
  suiteName: string,
  testNames: any[],
  targetDir = __dirname + "/ctrl_backspace"
) {
  suite(suiteName, () => {
    let assistService: TypeAssistService;

    setup(async () => {
      assistService = await TypeAssistService.init([
        new StringSeparator(),
        new DocstringCompleter(),
        new FunctionCompleter(),
        new BracketingExpressionCompleter(),
        new NewlineSpaceRemover(),
        new CommentSeparator(),
        new ReturnDedent(),
      ]);
      window.onDidChangeActiveTextEditor((e) => assistService.changeDoc(e));
    });

    testNames.forEach((testName: any) => {
      // const testName = testNames
      test(testName, async () => {
        const filePath = targetDir + "/" + suiteName + "/" + testName;
        const obj = await readTestFile(filePath);

        const startText = obj.startText;
        const endText = obj.endText;
        const offset = obj.insertOffset;
        const caretOffset = obj.caretOffset;

        if (!assistService) {
          throw new Error("TypeAssistService is not initialized.");
        }
        return withRandomFileEditor(startText, async (editor, doc) => {
          const insertPosition = editor.document.positionAt(offset);
          editor.selection = new Selection(insertPosition, insertPosition);

          //   await editor.insertSnippet(new SnippetString(insertText));
          await commands.executeCommand("python-helper-project.newDelete");

          assert.strictEqual(doc.getText(), endText);
          assert.strictEqual(
            doc.offsetAt(editor.selection.active),
            caretOffset,
            "caret position"
          );
          assert.ok(doc.isDirty);
        });
      });
    });
  });
}
