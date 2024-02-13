import * as vscode from 'vscode';
import { ITypingAssist } from "../types";


/**
 * Временный доп класс
 */
export class HalloWordCompleter implements ITypingAssist {
    isApplicable(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): Boolean {
        let position = editor.selection.active;
        return !!(
            changeEvent.contentChanges.length === 1
            && changeEvent.contentChanges[0].rangeLength == 0
            && position
            && editor.document.getText(new vscode.Range(position.with(undefined, position.character - 4), position))
            + changeEvent.contentChanges[0].text === "Hello"
        )
    }

    apply(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): void {
        let position = editor.selection.active;
        if (position) {

            editor.edit(editBuilder => {
                editBuilder.replace(new vscode.Range(position.translate(0, 1), position.translate(0, 1)), " world ${1:blabla}!!!");
            }, { undoStopAfter: false, undoStopBefore: true });

        }
    }
}
