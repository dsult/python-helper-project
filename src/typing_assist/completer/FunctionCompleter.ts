import * as vscode from 'vscode';
import { Context, ITypingAssist } from "../types";
import Parser from 'web-tree-sitter';

/**
 * Дописывание функции после проставления скобки
 */
export class FunctionCompleter implements ITypingAssist {
    optionName: string = 'functionCompleter';
    newTree: Parser.Tree | undefined;
    isApplicable(context: Context): Boolean {
        const tree = context.tree;
        const editor = context.editor;
        const changeEvent = context.changeEvent;
        const parser = context.parser;

        let position = editor.selection.active;

        if (
            !(
                changeEvent.contentChanges.length === 1
                && changeEvent.contentChanges[0].text === "()"
            )
        ) {
            return false;
        }

        // Получаем весь текст документа
        const content = changeEvent.document.getText();

        // Находим конец строки, на которой находится курсор
        const lineEndPosition = editor.document.lineAt(position.line).range.end;
        const lineEndOffset = editor.document.offsetAt(lineEndPosition);

        // Обрезаем текст до конца текущей строки
        const trimmedContent = content.substring(0, lineEndOffset);

        changeEvent.contentChanges.forEach(change => {
            const startPosition = editor.document.positionAt(change.rangeOffset);
            const oldEndPosition = editor.document.positionAt(change.rangeOffset + change.rangeLength);
            const newEndPosition = editor.document.positionAt(change.rangeOffset + change.text.length);

            tree.edit({
                startIndex: change.rangeOffset,
                oldEndIndex: change.rangeOffset + change.rangeLength,
                newEndIndex: change.rangeOffset + change.text.length,
                startPosition: { row: startPosition.line, column: startPosition.character },
                oldEndPosition: { row: oldEndPosition.line, column: oldEndPosition.character },
                newEndPosition: { row: newEndPosition.line, column: newEndPosition.character },
            });
        });

        // Парсим обрезанный текст
        this.newTree = parser.parse(trimmedContent, tree);

        const currentNode = this.newTree.rootNode.descendantForPosition({
            row: position.line,
            column: position.character,
        });

        return !!(
            (
                currentNode?.parent?.type === "parameters"
                && currentNode.parent?.parent?.type === "ERROR"
                && currentNode.parent?.previousSibling?.previousSibling?.text === "def"
            )
        )
    }


    apply(context: Context): void {

        const editor = context.editor;

        let position: vscode.Position = editor.selection.active;

        const currentNode = this.newTree!.rootNode.descendantForPosition({
            row: position.line,
            column: position.character,
        });

        let snippet: string;

        switch (this.checkFunctionKind(currentNode)) {
            case FunctionKind.Method:
                snippet = "(self$1):\n\t${0:pass}";
                break;
            case FunctionKind.Setter:
                snippet = "(self, value):\n\t${0:pass}";
                break;
            case FunctionKind.ClassMethod:
                snippet = "(cls$1):\n\t${0:pass}";
                break;
            case FunctionKind.Property:
                snippet = "(self):\n\treturn $0";
                break;
            case FunctionKind.RegularFunction:
            case FunctionKind.StaticMethod:
            default:
                snippet = "($1):\n\t${0:pass}";
                break;
        }


        editor.insertSnippet(
            new vscode.SnippetString(snippet),
            new vscode.Range(position, position.translate(0, 2)),
            // { undoStopBefore: false, undoStopAfter: false, }
        );

    }

    private checkFunctionKind(currentNode: Parser.SyntaxNode): FunctionKind {

        const isInClassDefinition = (
            currentNode.parent?.parent?.parent?.type === "class_definition"
            || (
                currentNode.parent?.parent?.parent?.type === "block"
                && currentNode.parent.parent.parent.parent?.type === "class_definition"
            )
        );

        const lastDecoratorText = currentNode.parent?.previousNamedSibling?.previousNamedSibling?.text;

        const isStaticMethod = lastDecoratorText === "@staticmethod";
        const isClassMethod = lastDecoratorText === "@classmethod";
        const isProperty = lastDecoratorText === "@property";
        const isSetter = !!lastDecoratorText?.endsWith(".setter");

        switch (true) {

            case isInClassDefinition && isStaticMethod:
                return FunctionKind.StaticMethod;

            case isInClassDefinition && isClassMethod:
                return FunctionKind.ClassMethod;

            case isInClassDefinition && isSetter:
                return FunctionKind.Setter;
                
            case isInClassDefinition && isProperty:
                return FunctionKind.Property;

            case isInClassDefinition:
                return FunctionKind.Method;

            default:
                return FunctionKind.RegularFunction;
        }

    }
}

enum FunctionKind {
    StaticMethod,
    Method,
    RegularFunction,
    ClassMethod,
    Setter,
    Property,
}