import * as vscode from 'vscode';
import { ITypingAssist } from "../types";


/**
 * Автоматическая док строка (для функций)
 */
export class DocstringCompliter implements ITypingAssist {
    readonly QUOTE_NODE_ID = 100;

    isApplicable(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): Boolean {

        let position = vscode.window.activeTextEditor?.selection.active;

        const currentNode = tree.rootNode.descendantForPosition({
            row: position?.line,
            column: position?.character
        });
        // if (position) {
        //     console.log(currentNode.parent.text);

        //     console.log(this.isEmptyTripleQuoteString(currentNode.parent.text));
        //     // console.log(this.isCursorInMiddle(currentNode.parent, position));
        // }

        return !!(
            changeEvent.contentChanges.length === 1
            && editor
            && position
            && /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text)
            && changeEvent.contentChanges[0].rangeLength == 0
        ) && (
                // проверка что мы внутри тройной докстроки 
                currentNode.typeId === this.QUOTE_NODE_ID
                && this.isEmptyTripleQuoteString(currentNode.parent.text)
                && this.isCursorInMiddle(currentNode.parent, position)
                && currentNode.parent?.parent?.parent?.parent?.firstChild.text == "def"
            )
    }

    apply(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): void {

        console.log("Мы внутри докстринга все норм(???)");
        let snippet = '$0'


        snippet += '\n\nParameters$2\n----------\n$1'
        // console.log(snippet);
        
        vscode.commands.executeCommand("editor.action.insertSnippet", {
            "snippet": snippet
        })
        // "\nprint(${1:bla})\n$0\n"
    }

    isEmptyTripleQuoteString = (text: string): boolean => ["''''''", '""""""'].includes(text);
    isCursorInMiddle = (node: any, position: vscode.Position): boolean => {
        // Проверяем, что курсор посередине пустого докстринга
        return position.character === node.startPosition.column + 3
            && position.line === node.startPosition.row;
    };
}