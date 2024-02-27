import * as vscode from 'vscode';
import { Context, ITypingAssist } from "../types";
import Parser from 'web-tree-sitter';

/**
 * Дописывание функции после проставления скобки
 */
export class FunctionCompleter implements ITypingAssist {
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
                && changeEvent.reason !== 1
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

        let snippet: string = "";

        switch (this.checkDecoratorAndClassContext(currentNode)) {
            case MethodContext.MethodInClass:
                snippet = "(self$1):\n\t";
                break;
            case MethodContext.NotInClass:
            case MethodContext.StaticMethodInClass:
            default:
                snippet = "($1):\n\t";
                break;
        }

        snippet += "${0:pass}"

        // vscode.commands.executeCommand("editor.action.insertSnippet", { snippet: snippet, })
        editor.insertSnippet(
            new vscode.SnippetString(snippet),
            new vscode.Range(position, position.translate(0, 2)),
            // { undoStopBefore: false, undoStopAfter: false, }
        );

    }



    private checkDecoratorAndClassContext(currentNode: Parser.SyntaxNode): MethodContext {

        const inClassDefinition = (
            currentNode.parent?.parent?.parent?.type === "class_definition"
            || (
                currentNode.parent?.parent?.parent?.type === "block"
                && currentNode.parent.parent.parent.parent?.type === "class_definition"
            )
        );

        const isStaticMethod =
            currentNode.parent?.previousNamedSibling?.previousNamedSibling?.text === "@staticmethod";

        switch (true) {
            case inClassDefinition && isStaticMethod:
                return MethodContext.StaticMethodInClass;
            case inClassDefinition:
                return MethodContext.MethodInClass;
            default:
                return MethodContext.NotInClass;
        }

    }
}

enum MethodContext {
    StaticMethodInClass = "StaticMethodInClass",
    MethodInClass = "MethodInClass",
    NotInClass = "NotInClass"
}