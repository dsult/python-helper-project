import * as vscode from 'vscode';
import { Context, ExtendedSyntaxNode, ITypingAssist } from "../types";


/**
 * Автоматическая док строка (для функций)
 */
export class DocstringCompleter implements ITypingAssist {
    readonly QUOTE_NODE_ID = 100;

    isApplicable(context: Context): Boolean {
        const tree = context.tree;
        const editor = context.editor;
        const changeEvent = context.changeEvent;

        let position = editor.selection.active;

        const currentNode = tree.rootNode.descendantForPosition({
            row: position.line,
            column: position.character
        }) as ExtendedSyntaxNode;

        return !!(
            changeEvent.contentChanges.length === 1
            && /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text)
            && changeEvent.contentChanges[0].rangeLength == 0
        ) && (
                // проверка что мы внутри тройной докстроки 
                currentNode.typeId === this.QUOTE_NODE_ID
                && currentNode.parent !== null
                && this.isEmptyTripleQuoteString(currentNode.parent.text)
                && this.isCursorInMiddle(currentNode.parent, position)
            )
    }

    apply(context: Context): void {
        const tree = context.tree;
        const editor = context.editor;

        let position = editor.selection.active;

        const currentNode = tree.rootNode.descendantForPosition({
            row: position.line,
            column: position.character
        });

        editor.insertSnippet(
            new vscode.SnippetString('\n'),
            editor.selection.active,
            { undoStopBefore: false, undoStopAfter: false, }
        )

        if (
            currentNode.parent?.parent?.parent?.parent?.type == "function_definition"
            // (может ли тут быть обращение к несуществующему элементу???)
            && currentNode.parent.parent.parent.parent.children[2].type == "parameters"
            // проверка что перед стрингой нет ничего в теле функции
            && currentNode.parent.parent.previousSibling === null
        ) {


            const parameters = currentNode.parent.parent.parent.parent.children[2].namedChildren

            let cursorCounter = 1;
            let snippet = '$0\n\n'

            if (parameters.length > 0) {

                snippet += 'Parameters\n----------\n'

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
                            if (parameterNode.firstChild && parameterNode.lastChild) {
                                snippet += parameterNode.firstChild.text + ": Any = " + parameterNode.lastChild.text + "\n"
                                snippet += "\t$" + cursorCounter + "\n"
                                cursorCounter++;
                            }
                            break;

                        case "dictionary_splat_pattern":
                            snippet += parameterNode.text + ": dict\n"
                            snippet += "\t$" + cursorCounter + "\n"
                            cursorCounter++;
                            break;

                        default:
                            break;
                    }
                }
            }

            snippet += '\nReturns\n-------\n${' + cursorCounter + ":None}\n"
            // editor.insertSnippet(
            //     new vscode.SnippetString(snippet),
            //     editor.selection.active,
            //     // { undoStopBefore: false, undoStopAfter: false, }
            // );
            vscode.commands.executeCommand("editor.action.insertSnippet", { snippet: snippet, })
        }
    }
    isEmptyTripleQuoteString = (text: string): boolean => ["''''''", '""""""'].includes(text);
    isCursorInMiddle = (node: any, position: vscode.Position): boolean => {
        // Проверяем, что курсор посередине пустого докстринга
        return position.character === node.startPosition.column + 3
            && position.line === node.startPosition.row;
    };
}