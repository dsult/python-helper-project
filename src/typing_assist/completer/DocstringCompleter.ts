import * as vscode from 'vscode';
import { Context, ExtendedSyntaxNode, ITypingAssist } from "../types";
import { SyntaxNode } from 'web-tree-sitter';


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

            // проверка что мы внутри тройной докстроки 
            && currentNode.typeId === this.QUOTE_NODE_ID
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

            const parameters = currentNode.parent.parent.parent.parent.namedChildren[1].namedChildren
            const DocstringFormat = vscode.workspace
                .getConfiguration()
                .get('python-helper-project.DocstringFormat');
            let snippet;
            switch (DocstringFormat) {
                case "Epytext":
                    snippet = this.getEpytextDocstringSnippet(parameters, currentNode);
                    break;

                case "Numpy":
                default:
                    snippet = this.getNumpyDocstringSnippet(parameters, currentNode);
                    break;
            }


            vscode.commands.executeCommand("editor.action.insertSnippet", { snippet: snippet, })
        }
    }

    private isEmptyTripleQuoteString = (text: string): boolean => ["''''''", '""""""'].includes(text);
    private isCursorInMiddle = (node: any, position: vscode.Position): boolean => {
        // Проверяем, что курсор посередине пустого докстринга
        return position.character === node.startPosition.column + 3
            && position.line === node.startPosition.row;
    };

    private getNumpyDocstringSnippet(parameters: SyntaxNode[], currentNode: SyntaxNode): string {
        let cursorCounter = 1;
        let snippet = '$0\n\n';

        const isOnlySelfParam = !!(
            parameters.length === 1
            && parameters[0].text === "self"
        );

        if (parameters.length > 0
            && !isOnlySelfParam) {

            snippet += 'Parameters\n----------\n';

            // пропуск селфа если он есть
            const startParamIndex = (parameters[0].text === "self") ? 1 : 0;

            for (let i = startParamIndex; i < parameters.length; i++) {
                const parameterNode = parameters[i];

                switch (parameterNode.type) {
                    case "identifier":
                        snippet += parameterNode.text + ": Any\n";
                        snippet += "\t$" + cursorCounter + "\n";
                        cursorCounter++;
                        break;

                    case "typed_default_parameter":
                    case "typed_parameter":
                        snippet += parameterNode.text + "\n";
                        snippet += "\t$" + cursorCounter + "\n";
                        cursorCounter++;
                        break;

                    case "list_splat_pattern":
                        snippet += parameterNode.text + ": iterable\n";
                        snippet += "\t$" + cursorCounter + "\n";
                        cursorCounter++;
                        break;

                    case "default_parameter":
                        if (parameterNode.firstChild && parameterNode.lastChild) {
                            snippet += parameterNode.firstChild.text + ": Any = " + parameterNode.lastChild.text + "\n";
                            snippet += "\t$" + cursorCounter + "\n";
                            cursorCounter++;
                        }
                        break;

                    case "dictionary_splat_pattern":
                        snippet += parameterNode.text + ": dict\n";
                        snippet += "\t$" + cursorCounter + "\n";
                        cursorCounter++;
                        break;

                    default:
                        break;
                }
            }
            snippet += "\n";
        }

        // console.log(currentNode.parent.parent.parent.parent.namedChildren[2]);
        const isReturnType = currentNode.parent?.parent?.parent?.parent?.namedChildren[2].type === "type";
        if (isReturnType) {
            const returnType = currentNode.parent?.parent?.parent?.parent?.namedChildren[2].text;
            snippet += 'Returns\n-------\n' + returnType + '\n';

        } else {
            snippet += 'Returns\n-------\n${' + cursorCounter + ":None}\n";
        }
        return snippet;
    }

    private getEpytextDocstringSnippet(parameters: SyntaxNode[], currentNode: SyntaxNode): string {
        let cursorCounter = 1;
        let snippet = '$0\n';

        // пропуск селфа если он есть
        const startParamIndex = (parameters.length > 0) && (parameters[0].text === "self") ? 1 : 0;

        for (let i = startParamIndex; i < parameters.length; i++) {
            const parameterNode = parameters[i];

            switch (parameterNode.type) {
                case "identifier":
                    snippet += "@param " + parameterNode.text + ": $" + cursorCounter + "\n";
                    cursorCounter++;
                    break;

                case "list_splat_pattern":
                case "default_parameter":
                case "dictionary_splat_pattern":
                    if (parameterNode.firstNamedChild) {
                        snippet += "@param " + parameterNode.firstNamedChild.text + ": $" + cursorCounter + "\n";
                        cursorCounter++;
                    }
                    break;

                case "typed_default_parameter":
                case "typed_parameter":
                    if (parameterNode.firstNamedChild?.nextNamedSibling) {
                        console.log(parameterNode.firstNamedChild.text);
                        console.log(parameterNode.firstNamedChild.type);

                        snippet += "@type " + parameterNode.firstNamedChild.text + ": " + parameterNode.firstNamedChild.nextNamedSibling.text + "\n";
                        cursorCounter++;
                    }
                    if (parameterNode.firstNamedChild) {
                        snippet += "@param " + parameterNode.firstNamedChild.text + ": $" + cursorCounter + "\n";
                        cursorCounter++;
                    }
                    break;
                default:
                    break;
            }
        }


        // console.log(currentNode.parent.parent.parent.parent.namedChildren[2]);
        const isReturnType = currentNode.parent?.parent?.parent?.parent?.namedChildren[2].type === "type";
        if (isReturnType) {
            const returnType = currentNode.parent?.parent?.parent?.parent?.namedChildren[2].text;
            snippet += '@return: ' + returnType;

        } else {
            snippet += '@return: $' + cursorCounter;
        }
        return snippet;
    }
}