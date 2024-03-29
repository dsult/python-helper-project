import * as assert from "assert";
import {
  TextEditor,
  TextDocument,
  workspace,
  window,
  Position,
  Selection,
  SnippetString,
  Disposable,
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
  //   if (suiteName !== "CommentSeparator") {
  //     continue;
  //   }
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
