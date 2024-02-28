import * as vscode from 'vscode';
import { SyntaxNode } from "web-tree-sitter";

export function getDocstringSnippet(parameters: SyntaxNode[], currentNode: SyntaxNode) {
    let snippet;
    const DocstringFormat = vscode.workspace
        .getConfiguration()
        .get('typing-assist.DocstringFormat');

    switch (DocstringFormat) {
        case "Epytext":
            snippet = getEpytextDocstringSnippet(parameters, currentNode);
            break;

        case "reStructuredText":
            snippet = getReSTDocstringSnippet(parameters, currentNode);
            break;

        case "Google":
            snippet = getGoogleDocstringSnippet(parameters, currentNode);
            break;

        case "NumPy":
        default:
            snippet = getNumpyDocstringSnippet(parameters, currentNode);
            break;
    }

    return snippet;
}

function getNumpyDocstringSnippet(parameters: SyntaxNode[], currentNode: SyntaxNode): string {
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

function getGoogleDocstringSnippet(parameters: SyntaxNode[], currentNode: SyntaxNode): string {
    let cursorCounter = 1;
    let snippet = '$0\n\n';

    const isOnlySelfParam = !!(
        parameters.length === 1
        && parameters[0].text === "self"
    );

    if (parameters.length > 0
        && !isOnlySelfParam) {

        snippet += 'Args:\n';

        // пропуск селфа если он есть
        const startParamIndex = (parameters[0].text === "self") ? 1 : 0;

        for (let i = startParamIndex; i < parameters.length; i++) {
            const parameterNode = parameters[i];

            switch (parameterNode.type) {
                case "identifier":
                    snippet += "\t" + parameterNode.text + ": $" + cursorCounter + "\n";
                    cursorCounter++;
                    break;

                case "typed_default_parameter":
                case "typed_parameter":                    
                    snippet += "\t" + parameterNode.firstNamedChild?.text
                        + " (" + parameterNode.firstNamedChild?.nextNamedSibling?.text + ")"
                        + ": $" + cursorCounter + "\n";
                    cursorCounter++;
                    break;

                case "list_splat_pattern":
                    snippet += "\t" + parameterNode.text + ": $" + cursorCounter + "\n";
                    cursorCounter++;
                    break;

                case "default_parameter":
                    if (parameterNode.firstNamedChild) {
                        snippet += "\t" + parameterNode.firstNamedChild.text
                        + ": $" + cursorCounter + "\n";
                        cursorCounter++;
                    }
                    break;

                case "dictionary_splat_pattern":
                    snippet += "\t" + parameterNode.text + ": $" + cursorCounter + "\n";
                    cursorCounter++;
                    break;

                default:
                    break;
            }
        }
        snippet += "\n";
    }

    // console.log(currentNode.parent.parent.parent.parent.namedChildren[2]);
    snippet += 'Returns:\n\t$' + cursorCounter;
    return snippet;
}

function getEpytextDocstringSnippet(parameters: SyntaxNode[], currentNode: SyntaxNode): string {
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

function getReSTDocstringSnippet(parameters: SyntaxNode[], currentNode: SyntaxNode): string {
    let cursorCounter = 1;
    let snippet = '$0\n';

    // пропуск селфа если он есть
    const startParamIndex = (parameters.length > 0) && (parameters[0].text === "self") ? 1 : 0;

    for (let i = startParamIndex; i < parameters.length; i++) {
        const parameterNode = parameters[i];

        switch (parameterNode.type) {
            case "identifier":
                snippet += ":param " + parameterNode.text + ": $" + cursorCounter + "\n";
                cursorCounter++;
                break;

            case "list_splat_pattern":
            case "default_parameter":
            case "dictionary_splat_pattern":
                if (parameterNode.firstNamedChild) {
                    snippet += ":param " + parameterNode.firstNamedChild.text + ": $" + cursorCounter + "\n";
                    cursorCounter++;
                }
                break;

            case "typed_default_parameter":
            case "typed_parameter":
                if (parameterNode.firstNamedChild) {
                    snippet += ":param " +
                        (
                            (parameterNode.firstNamedChild.nextNamedSibling?.text)
                                ? (parameterNode.firstNamedChild.nextNamedSibling?.text + " ")
                                : ""
                        )
                        + parameterNode.firstNamedChild.text + ": $" + cursorCounter + "\n";

                    cursorCounter++;
                }
                break;
            default:
                break;
        }
    }

    snippet += ':returns: $' + cursorCounter;

    return snippet;

}

