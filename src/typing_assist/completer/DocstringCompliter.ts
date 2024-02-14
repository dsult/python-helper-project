import * as vscode from 'vscode';
import { ITypingAssist } from "../types";


/**
 * Автоматическая док строка (для функций)
 */
export class DocstringCompliter implements ITypingAssist {
    readonly QUOTE_NODE_ID = 100;

    isApplicable(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): Boolean {

        let position = editor?.selection.active;

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
                && currentNode.parent?.parent?.parent?.parent.type == "function_definition"
                // (может ли тут быть обращение к несуществующему элементу???)
                && currentNode.parent.parent.parent.parent.children[2].type == "parameters"
            )
    }

    apply(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): void {

        let position = editor?.selection.active;

        const currentNode = tree.rootNode.descendantForPosition({
            row: position?.line,
            column: position?.character
        });


        // editor.selection = new vscode.Selection(position, position);
        // // console.log(position.character / 4);

        // editor.edit(editBuilder => {
        //     editBuilder.insert(editor.selection.active, "\n");
        // }, { undoStopAfter: false, undoStopBefore: false });

        const parameters = currentNode.parent.parent.parent.parent.children[2].children

        let cursorCounter = 1;
        let snippet = '$0\n\n'

        if (
            parameters.length > 2

        ) {

            snippet += 'Parameters\n----------\n'

            
            
            // parameters.forEach((e: any)=> console.log(e.text + " " + e.type))
           
            
            for (let i = 0; i < parameters.length; i++) {
                const parameterNode = parameters[i];

                switch (parameterNode.type) {
                    case "identifier":
                        snippet += parameterNode.text + ": Any\n"
                        snippet += "\t$" + cursorCounter + "\n"
                        cursorCounter++;
                        break;

                    case "typed_default_parameter":
                    case "typed_parameter":
                        snippet += parameterNode.text + "\n"
                        snippet += "\t$" + cursorCounter + "\n"
                        cursorCounter++;
                        break;

                    case "list_splat_pattern":
                        snippet += parameterNode.text + ": iterable\n"
                        snippet += "\t$" + cursorCounter + "\n"
                        cursorCounter++;
                        break;
                        
                    case "default_parameter":
                        snippet += parameterNode.firstChild.text + ": Any = " + parameterNode.lastChild.text + "\n"
                        snippet += "\t$" + cursorCounter + "\n"
                        cursorCounter++;
                        break;
                    
                    case "dictionary_splat_pattern":
                        snippet += parameterNode.text + ": dict\n"
                        snippet += "\t$" + cursorCounter + "\n"
                        cursorCounter++;
                        break;

                    default:
                        console.log(parameterNode.type);

                        break;
                }
            }
        }

        snippet += '\nReturns\n-------\n${' + cursorCounter + ":None}\n"

        vscode.commands.executeCommand("editor.action.insertSnippet", { snippet: snippet, })
    }

    isEmptyTripleQuoteString = (text: string): boolean => ["''''''", '""""""'].includes(text);
    isCursorInMiddle = (node: any, position: vscode.Position): boolean => {
        // Проверяем, что курсор посередине пустого докстринга
        return position.character === node.startPosition.column + 3
            && position.line === node.startPosition.row;
    };
}