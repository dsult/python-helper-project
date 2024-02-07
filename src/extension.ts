import * as vscode from 'vscode';

let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {

	const Parser = require('web-tree-sitter');
	await Parser.init();
	const parser = new Parser;

	const path = require('path');

	const wasmPath = path.join(__dirname, 'lib/tree-sitter-python.wasm');
	const Python = await Parser.Language.load(wasmPath);
	parser.setLanguage(Python);

	let editor = vscode.window.activeTextEditor;
	let tree: any;
	if (editor) {
		const sourceCode = editor.document.getText();
		tree = parser.parse(sourceCode);
	}



	vscode.window.onDidChangeActiveTextEditor(e => {
		editor = vscode.window.activeTextEditor;

		if (editor) {
			const sourceCode = editor.document.getText();
			tree = parser.parse(sourceCode);
		}
	})

	const isQuote = (text: string): boolean => ["'", '"', "f'", 'f"', "r'", 'r"'].includes(text);
	const isRFQuote = (text: string): boolean => ["f'", 'f"', "r'", 'r"'].includes(text);
	const isFQuote = (text: string): boolean => ["f'", 'f"'].includes(text);

	disposable = vscode.workspace.onDidChangeTextDocument(e => {

		let position = vscode.window.activeTextEditor?.selection.active;

		// проверка что это перенос строки + пробелы
		if (e.contentChanges.length === 1 && /^\r\n(\s)*$/.test(e.contentChanges[0].text) && editor && position && e.contentChanges[0].rangeLength == 0) {

			const isCursorAfterRF = (node: any, position: vscode.Position): boolean => {
				// Check if the node has an 'f' or 'r' prefix
				if (isRFQuote(node.text)) {
					// Check if the cursor is at that position
					return position.character === node.startPosition.column + 1
						&& node.parent.startPosition.row === position.line;
				}
				return false;
			};
			const isCursorAtSecondPos = (node: any, position: vscode.Position): boolean => {
				// Проверяем, что позиция курсора равна начальной позиции узла плюс один символ
				return position.character === node.startPosition.column + 1
					&& position.line === node.startPosition.row;
			};

			const currentNode = tree.rootNode.descendantForPosition({
				row: position?.line,
				column: position?.character
			});

			if (
				(
					// нода кавычка
					currentNode.typeId === 100
					&& isQuote(currentNode.parent.firstChild.text)
					&& !(
						currentNode.parent.startPosition.row === position.line
						&& currentNode.parent.startPosition.column === position.character
					)
					&& !isCursorAfterRF(currentNode, position)
				) || (
					// нода строка
					currentNode.typeId === 200
					&& isQuote(currentNode.firstChild.text)
				) || (
					// нода фигурная скобка
					currentNode.typeId === 82
					&& isFQuote(currentNode?.parent?.parent?.firstChild.text)
				) || (
					// нода спец знак
					currentNode.typeId === 86
					&& isQuote(currentNode?.parent?.firstChild.text)
					&& !isCursorAtSecondPos(currentNode, position)
				)
			) {

				let stringtNode;

				switch (currentNode.typeId) {
					case 200:
						stringtNode = currentNode
						break;
					case 100:
					case 86:
						stringtNode = currentNode.parent
						break;
					case 82:
						stringtNode = currentNode.parent.parent
						break;
					default:
						break;
				}

				const ofs1 = editor.document.offsetAt(position)
				const ofs2 = ofs1 + e.contentChanges[0].text.length
				const pos1 = position;
				const pos2 = editor.document.positionAt(ofs2);

				const openQuoteText = stringtNode.firstChild.text;
				const closeQuoteText = stringtNode.lastChild.text;
				const columnOffset = stringtNode.firstChild.startPosition.column;

				editor.edit(editBuilder => {
					editBuilder.replace(new vscode.Range(pos1, pos2), closeQuoteText + "\n" + " ".repeat(columnOffset) + openQuoteText);
				}, { undoStopAfter: false, undoStopBefore: false });

			}

		}



		const content = e.document.getText();

		// инкриментальное обновление дерева
		e.contentChanges.forEach(change => {
			tree.edit({
				startIndex: change.rangeOffset,
				oldEndIndex: change.rangeOffset + change.rangeLength,
				newEndIndex: change.rangeOffset + change.text.length,
				startPosition: editor?.document.positionAt(change.rangeOffset),
				oldEndPosition: editor?.document.positionAt(change.rangeOffset + change.rangeLength),
				newEndPosition: editor?.document.positionAt(change.rangeOffset + change.text.length),
			});
		});

		tree = parser.parse(content, tree);

	});
	context.subscriptions.push(disposable);


	// все, внизу ничего интересного 
	disposable = vscode.commands.registerCommand('python-helper-project.test', async () => {
		let position = vscode.window.activeTextEditor?.selection.active;
		if (editor && position) {

			const currentNode = tree.rootNode.descendantForPosition({
				row: position?.line,
				column: position?.character
			});

			console.log({
				'nodeId': currentNode.typeId,
				'parentId': currentNode?.parent?.typeId,
			})

		}

	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
