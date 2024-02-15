import * as vscode from 'vscode';
import { Context, ITypingAssist } from "../types";

/**
 * Дописывание функции после проставления скобки
 */
export class FunctionCompleter implements ITypingAssist {
    newTree: any;
    isApplicable(context: Context): Boolean {
        const tree = context.tree;
        const editor = context.editor;
        const changeEvent = context.changeEvent;
        const parser = context.parser;

        let position = editor?.selection.active;
        if (
            !(changeEvent.contentChanges.length === 1
                && editor
                && position
                && changeEvent.contentChanges[0].text == "()"
                && changeEvent.reason !== 1
            )
        ) {
            return false;
        }
        console.log(changeEvent);

        const content = changeEvent.document.getText();
        changeEvent.contentChanges.forEach(change => {

            tree.edit({
                startIndex: change.rangeOffset,
                oldEndIndex: change.rangeOffset + change.rangeLength,
                newEndIndex: change.rangeOffset + change.text.length,
                startPosition: editor?.document.positionAt(change.rangeOffset),
                oldEndPosition: editor?.document.positionAt(change.rangeOffset + change.rangeLength),
                newEndPosition: editor?.document.positionAt(change.rangeOffset + change.text.length),
            });
        });

        this.newTree = parser.parse(content, tree);

        const currentNode = this.newTree.rootNode.descendantForPosition({
            row: position?.line,
            column: position?.character,
        });

        console.log(tree.rootNode.text);
        console.log(tree.rootNode.toString());

        return !!(
            currentNode.parent.type === "parameters"
            && currentNode.parent.parent.type === "ERROR"
            && currentNode.parent.previousSibling.previousSibling.text == "def"
        )
    }

    apply(context: Context): void {

        const tree = context.tree;
        const editor = context.editor;
        const changeEvent = context.changeEvent;

        let position = editor?.selection.active;

        const currentNode = this.newTree.rootNode.descendantForPosition({
            row: position?.line,
            column: position?.character,
        });
        console.log(currentNode.parent.parent.parent.parent.type);

        editor.edit(editBuilder => {
            editBuilder.replace(new vscode.Range(position, position.translate(0, 2)), "");
        }, { undoStopAfter: true, undoStopBefore: true });
        let snippet
        if (currentNode.parent.parent.parent.type === "class_definition") {
            snippet = "(self,$1):\n\t${0:pass}"
        } else {
            snippet = "($1):\n\t${0:pass}"
        }
        vscode.commands.executeCommand("editor.action.insertSnippet", { snippet: snippet, })


    }
}