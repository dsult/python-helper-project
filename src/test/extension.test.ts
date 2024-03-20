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

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
suite("CommentSeparator", async () => {
  //   teardown(async function () {
  //     // assertNoRpc();
  //     await closeAllEditors();
  //   });

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

  const obj = {
    startText: "# some text",
    endText: "# some\r\n# text",
    insertPosition: new Position(0, 6),
    insertText: "\n",
    caretPosition: new Position(1, 2),
  };

  test("test simple", async () => {
    const insertPosition = new Position(0, 6);

    const startText = "# some text";
    const endText = "# some\r\n# text";

    return withRandomFileEditor(startText, async (editor, doc) => {
      //     console.log(
      //     `(${editor.selection.active.line}, ${editor.selection.active.character})`
      //   );
      const assistService = await TypeAssistService.init([
        new CommentSeparator(),
      ]);

      editor.selection = new Selection(insertPosition, insertPosition);

      const finishedPromise = new DeferredPromise<void>();

      workspace.onDidChangeTextDocument(async (e) => {
        await assistService.processing(e);

        assert.strictEqual(doc.getText(), endText);
        assert.ok(doc.isDirty);

        await finishedPromise.complete();
      });

      await editor.insertSnippet(new SnippetString("\n"));

      await finishedPromise.p;
    });
  });
  return;
});
