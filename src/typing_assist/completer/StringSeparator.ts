import * as vscode from 'vscode';
import { Context, ITypingAssist } from "../types";


/**
 * Ассист для нажатия ентра внутри строк
 */
export class StringSeparator implements ITypingAssist {
	readonly STRING_NODE_ID = 200;
	readonly QUOTE_NODE_ID = 100;
	readonly SPECIAL_CHARACTER_NODE_ID = 86;
	readonly BRACE_NODE_ID = 82;

	isApplicable(context: Context): Boolean {
        const tree = context.tree;
        const editor = context.editor;
        const changeEvent = context.changeEvent;
		let position = vscode.window.activeTextEditor?.selection.active;

		const currentNode = tree.rootNode.descendantForPosition({
			row: position?.line,
			column: position?.character
		});

		// проверка что это перенос строки + пробелы
		return !!((
			changeEvent.contentChanges.length === 1
			&& editor
			&& position
			&& /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text)
			&& changeEvent.contentChanges[0].rangeLength == 0
		) && (
				(
					// нода кавычка
					currentNode.typeId === this.QUOTE_NODE_ID
					&& this.isQuote(currentNode.parent.firstChild.text)
					&& !(
						currentNode.parent.startPosition.row === position.line
						&& currentNode.parent.startPosition.column === position.character
					)
					&& !this.isCursorAfterRF(currentNode, position)
				) || (
					// нода строка
					currentNode.typeId === this.STRING_NODE_ID
					&& this.isQuote(currentNode.firstChild.text)
				) || (
					// нода фигурная скобка
					currentNode.typeId === this.BRACE_NODE_ID
					&& this.isFQuote(currentNode?.parent?.parent?.firstChild.text)
				) || (
					// нода спец знак
					currentNode.typeId === this.SPECIAL_CHARACTER_NODE_ID
					&& this.isQuote(currentNode?.parent?.firstChild.text)
					&& !this.isCursorAtSecondPos(currentNode, position)
				)
			))
	}
	apply(context: Context): void {
        const tree = context.tree;
        const editor = context.editor;
        const changeEvent = context.changeEvent;
		let position = vscode.window.activeTextEditor?.selection.active;
		
		const currentNode = tree.rootNode.descendantForPosition({
			row: position?.line,
			column: position?.character
		});


		if (position) {

			let stringtNode: any;

			switch (currentNode.typeId) {
				case this.STRING_NODE_ID:
					stringtNode = currentNode
					break;
				case this.QUOTE_NODE_ID:
				case this.SPECIAL_CHARACTER_NODE_ID:
					stringtNode = currentNode.parent
					break;
				case this.BRACE_NODE_ID:
					stringtNode = currentNode.parent.parent
					break;
				default:
					break;
			}

			if (
				stringtNode.parent.type === "assignment"
				|| stringtNode.parent.type === "return_statement"
			) {
				console.log("stringtNode.parent.type === assignment || return_statement");

				// editor.edit(editBuilder => {
				// 	// Получаем позицию начала и конца ноды
				// 	let startPosition = new vscode.Position(stringtNode.range.start.line, stringtNode.range.start.character);
				// 	let endPosition = new vscode.Position(stringtNode.range.end.line, stringtNode.range.end.character);
				// 	console.log(startPosition);
				// 	console.log(endPosition);

				// 	// Вставляем скобки перед началом ноды и после конца ноды
				// 	editBuilder.insert(startPosition, "(");
				// 	editBuilder.insert(endPosition, ")");
				// }, { undoStopAfter: false, undoStopBefore: false });

			}
			// console.log(stringtNode.parent.type);
			// console.log(stringtNode.parent.text);
			// console.log(stringtNode.parent);


			const ofs1 = editor.document.offsetAt(position)
			const ofs2 = ofs1 + changeEvent.contentChanges[0].text.length
			const pos1 = position;
			const pos2 = editor.document.positionAt(ofs2);

			const openQuoteText = stringtNode.firstChild.text;
			const closeQuoteText = stringtNode.lastChild.text;
            
            // editor.insertSnippet(
            //     new vscode.SnippetString(closeQuoteText + '\n' + openQuoteText),
            //     new vscode.Range(pos1, pos2),
            //     { undoStopBefore: false, undoStopAfter: false, }
            // );

			const columnOffset = stringtNode.firstChild.startPosition.column;
			editor.edit(editBuilder => {
				editBuilder.replace(new vscode.Range(pos1, pos2), closeQuoteText + "\n" + " ".repeat(columnOffset) + openQuoteText);
			}, { undoStopAfter: false, undoStopBefore: false });
		}
	}

	isQuote = (text: string): boolean => ["'", '"', "f'", 'f"', "r'", 'r"'].includes(text);
	isRFQuote = (text: string): boolean => ["f'", 'f"', "r'", 'r"'].includes(text);
	isFQuote = (text: string): boolean => ["f'", 'f"'].includes(text);
	/**
	 * Проверяет стоит ли курсор сразу после r/f, триситтер определяет это место как строку 
	 */
	isCursorAfterRF = (node: any, position: vscode.Position): boolean => {
		// Check if the node has an 'f' or 'r' prefix
		if (this.isRFQuote(node.text)) {
			// Check if the cursor is at that position
			return position.character === node.startPosition.column + 1
				&& node.parent.startPosition.row === position.line;
		}
		return false;
	};
	isCursorAtSecondPos = (node: any, position: vscode.Position): boolean => {
		// Проверяем, что позиция курсора равна начальной позиции узла плюс один символ
		return position.character === node.startPosition.column + 1
			&& position.line === node.startPosition.row;
	};
}