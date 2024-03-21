import * as assert from "assert";
import {
  TextEditor,
  TextDocument,
  workspace,
  window,
  Position,
  Selection,
  SnippetString,
} from "vscode";
import { TypeAssistService } from "../typing_assist/TypeAssistService";
import { CommentSeparator } from "../typing_assist/completer/CommentSeparator";
import { createRandomFile, deleteFile, DeferredPromise } from "../utils";
import { BracketingExpressionCompleter } from "../typing_assist/completer/BracketingExpressionCompleter";
import { DocstringCompleter } from "../typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "../typing_assist/completer/FunctionCompleter";
import { NewlineSpaceRemover } from "../typing_assist/completer/NewlineSpaceRemover";
import { ReturnDedent } from "../typing_assist/completer/ReturnDedent";
import { StringSeparator } from "../typing_assist/completer/StringSeparator";
import { getFoldersAndFiles, readTestFile } from "./testUtils";

async function withRandomFileEditor(
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

const dirPath = __dirname + "/test_files";
const FoldersAndFiles = getFoldersAndFiles(dirPath);
for (const suiteName in FoldersAndFiles) {
  const testNames = FoldersAndFiles[suiteName];
  makeSuite(suiteName, testNames);
}

function makeSuite(suiteName: string, testNames: any[]) {
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
        const filePath =
          __dirname + "/test_files/" + suiteName + "/" + testName;
        const obj = await readTestFile(filePath);

        const startText = obj.startText;
        const endText = obj.endText;
        const offset = obj.insertOffset;

        if (!assistService) {
          throw new Error("TypeAssistService is not initialized.");
        }
        return withRandomFileEditor(startText, async (editor, doc) => {
          const insertPosition = editor.document.positionAt(offset);
          editor.selection = new Selection(insertPosition, insertPosition);

          const finishedPromise = new DeferredPromise<void>();

          workspace.onDidChangeTextDocument(async (e) => {
            await assistService.processing(e);

            // assert.strictEqual(doc.getText(), doc.getText());
            assert.strictEqual(doc.getText(), endText);
            assert.ok(doc.isDirty);

            await finishedPromise.complete();
          });

          await editor.insertSnippet(new SnippetString("\n"));

          await finishedPromise.p;
        });
      });
    });
  });
}

// suite("testsute", () => {
//   let assistService: TypeAssistService;

//   setup(async () => {
//     assistService = await TypeAssistService.init([
//       new StringSeparator(),
//       new DocstringCompleter(),
//       new FunctionCompleter(),
//       new BracketingExpressionCompleter(),
//       new NewlineSpaceRemover(),
//       new CommentSeparator(),
//       new ReturnDedent(),
//     ]);
//     window.onDidChangeActiveTextEditor((e) => assistService.changeDoc(e));
//   });

//   // const testName = testNames
//   test("falsetest", async () => {
//     const filePath =
//       __dirname + "/test_files/CommentSeparator/test4_break.gold";
//     const obj = await readTestFile(filePath);

//     const startText = obj.startText;
//     const endText = obj.endText;
//     const offset = obj.insertOffset;

//     if (!assistService) {
//       throw new Error("TypeAssistService is not initialized.");
//     }
//     return withRandomFileEditor(startText, async (editor, doc) => {
//       const insertPosition = editor.document.positionAt(offset);
//       editor.selection = new Selection(insertPosition, insertPosition);

//       const finishedPromise = new DeferredPromise<void>();

//       workspace.onDidChangeTextDocument(async (e) => {
//         await assistService.processing(e);

//         assert.strictEqual(doc.getText(), endText);
//         assert.ok(doc.isDirty);

//         await finishedPromise.complete();
//       });

//       await editor.insertSnippet(new SnippetString("\n"));

//       await finishedPromise.p;
//     });
//   });
// });

// suite("CommentSeparator", async () => {
//   const obj = {
//     startText: "# some text",
//     endText: "# some\r\n# text",
//     insertPosition: new Position(0, 6),
//     insertText: "\n",
//     caretPosition: new Position(1, 2),
//   };

//   test("test simple", async () => {
//     const insertPosition = new Position(0, 6);

//     const startText = "# some text";
//     const endText = "# some\r\n# text2";

//     return withRandomFileEditor(startText, async (editor, doc) => {
//       //     console.log(
//       //     `(${editor.selection.active.line}, ${editor.selection.active.character})`
//       //   );
//       const assistService = await TypeAssistService.init([
//         new CommentSeparator(),
//       ]);

//       editor.selection = new Selection(insertPosition, insertPosition);

//       const finishedPromise = new DeferredPromise<void>();

//       workspace.onDidChangeTextDocument(async (e) => {
//         await assistService.processing(e);

//         assert.strictEqual(doc.getText(), endText);
//         assert.ok(doc.isDirty);

//         await finishedPromise.complete();
//       });

//       await editor.insertSnippet(new SnippetString("\n"));

//       await finishedPromise.p;
//     });
//   });
//   return;
// });
