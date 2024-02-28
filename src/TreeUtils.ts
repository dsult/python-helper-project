import { SyntaxNode } from "web-tree-sitter";

/**
 * Проверяет наличие ноды с определенным типом в родительских нодах относительно целевой ноды.
 * @param targetNode Целевая нода, относительно которой производится проверка.
 * @param type Тип ноды, который необходимо найти среди родительских нод.
 * @returns true, если нода с заданным типом найдена среди родительских нод; в противном случае - false.
 */
export function hasParentWithType(targetNode: SyntaxNode, type: string): boolean {
    let parent = targetNode.parent;
    while (parent !== null) {
        if (parent.type === type) {
            return true;
        }
        parent = parent.parent;
    }
    return false;
}