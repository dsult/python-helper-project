import * as vscode from 'vscode';
import { Context, ITypingAssist } from "../types";
import { SyntaxNode } from 'web-tree-sitter';
import { getParentWithType, hasParentWithType } from '../../TreeUtils';


/**
 * Ассист для нажатия ентра внутри строк
 */
export class BracketingExpressionCompleter implements ITypingAssist {
    optionName: string = 'bracketingExpressionCompleter';
    isApplicable(context: Context): Boolean {
        const tree = context.tree;
        const editor = context.editor;
        const changeEvent = context.changeEvent;
        const position = editor.selection.active;

        const currentNode = tree.rootNode.descendantForPosition({
            row: position.line,
            column: position.character
        });

        const hasParentWithTargetType = targetTypes.some(type => hasParentWithType(currentNode, type));
        const isPrevCharBackSlash = currentNode.type === "line_continuation"
        // console.log(currentNode.type);
        
        return !!(
            (
                changeEvent.contentChanges.length === 1
                && /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text)
                && changeEvent.contentChanges[0].rangeLength == 0
                && editor.selection.active.isEqual(
                    changeEvent.contentChanges[0].range.start
                )
            ) && hasParentWithTargetType
            && !(
                hasParentWithType(currentNode, 'parenthesized_expression')
                || hasParentWithType(currentNode, 'argument_list')
            ) && ! isPrevCharBackSlash
            

        )
    }
    async apply(context: Context): Promise<void> {

        const tree = context.tree;
        const editor = context.editor;
        const changeEvent = context.changeEvent;
        const position = editor.selection.active;

        const currentNode = tree.rootNode.descendantForPosition({
            row: position.line,
            column: position.character
        });


        let targetParentNode: SyntaxNode | null = null;

        // Перебираем типы из массива targetTypes
        for (const type of targetTypes) {
            // Если находим узел с текущим типом, присваиваем его переменной targetParentNode
            if (hasParentWithType(currentNode, type)) {
                targetParentNode = getParentWithType(currentNode, type);
                break; // Прерываем цикл, если узел найден
            }
        }

        

        if (targetParentNode?.lastChild) {

            let pos1 = editor.document.positionAt(targetParentNode.lastChild.startIndex)
            let pos2 = editor.document.positionAt(targetParentNode.lastChild.endIndex + changeEvent.contentChanges[0].text.length)

            await editor.edit(editBuilder => {
                editBuilder.replace(new vscode.Range(pos1, pos1), "(");
            }, { undoStopAfter: false, undoStopBefore: false });
            await editor.edit(editBuilder => {
                editBuilder.replace(new vscode.Range(pos2, pos2), ")");
            }, { undoStopAfter: false, undoStopBefore: false });

            let columnOffset = targetParentNode.lastChild.startPosition.column + 1;
            
            let ofs1 = editor.document.offsetAt(position) + 1
            let ofs2 = ofs1 + changeEvent.contentChanges[0].text.length

            pos1 = editor.document.positionAt(ofs1);
            pos2 = editor.document.positionAt(ofs2);

            await editor.edit(editBuilder => {
                editBuilder.replace(new vscode.Range(pos1, pos2), "\n" + " ".repeat(columnOffset));
            }, { undoStopAfter: false, undoStopBefore: false });
        }
    }

}

const targetTypes = [
    "return_statement",
    "assignment",
    "augmented_assignment",
    "comparison_operator",
    "binary_operator",
]