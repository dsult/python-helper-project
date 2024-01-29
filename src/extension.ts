import { privateDecrypt } from 'crypto';
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

	const editor = vscode.window.activeTextEditor;
	let tree: any;
	if (editor) {
		// Get the source code of the active file
		const sourceCode = editor.document.getText();
	
		// Parse the source code using the Tree-sitter parser
		tree = parser.parse(sourceCode);
	} 

	disposable = vscode.workspace.onDidChangeTextDocument(e => {
		
		console.log(tree);
		
		console.log(e);
		
		// далее надо оформить сюда обновлениедерева при изменении дока


		
		// if (editor && e.document === editor.document) {
		// 	// Update the syntax tree using tree.edit
		// 	tree.edit(edit => {
		// 		// Apply the changes to the syntax tree
		// 		for (const change of e.contentChanges) {
		// 			edit.replace({
		// 				start: tree.rootNode.positionAt(change.rangeOffset),
		// 				oldEnd: tree.rootNode.positionAt(change.rangeOffset + change.rangeLength),
		// 				newEnd: tree.rootNode.positionAt(change.rangeOffset + change.text.length),
		// 			}, change.text);
		// 		}
		// 	});
			
		// 	// Log the updated syntax tree
		// 	console.log(tree.rootNode.toString());
		// }
	
		// если всего один символ добавили
		if (e.contentChanges.length === 1 && e.contentChanges[0].text.length === 1) {
			

			// const editor = vscode.window.activeTextEditor;
			if (editor) {
				const position = editor.selection.active;

				const text = editor.document.getText(new vscode.Range(position.translate(0, -4), position.translate(0, 1)));
				// console.log(`Word to the left of the cursor: ${text}`);
				if (text === 'Hello') {
					const edit = new vscode.WorkspaceEdit();
					edit.replace(editor.document.uri, new vscode.Range(position.translate(0, 1), position.translate(0, 1)), ", word!1!");
					vscode.workspace.applyEdit(edit);
				}
			}
		}
	});
	context.subscriptions.push(disposable);



	// тест штука, сейчас рандомные триситтерные движения
	disposable = vscode.commands.registerCommand('python-helper-project.test', async () => {

		try {
			const editor = vscode.window.activeTextEditor;

			if (editor) {
				const sourceCode = editor.document.getText();

				const tree = parser.parse(sourceCode);

				console.log(tree.rootNode);

				const callExpression = tree.rootNode.child(1).firstChild;
				console.log(callExpression);


				const position = editor.selection.active;

				// Get the syntax node at the cursor position
				const nodeAtCursor = tree.rootNode.descendantForPosition({
					row: position.line,
					column: position.character
				});
			
				// Check if a node is found at the cursor position
				if (nodeAtCursor) {
					// Log the type of the syntax node at the cursor position
					console.log('Node Type at Cursor:', nodeAtCursor.type);
				} else {
					console.error('No syntax node found at the cursor position.');
				}

				const isRawString = sourceCode[nodeAtCursor.startIndex] === 'r';

				// Log the type of the string at the cursor position
				console.log('String Type at Cursor:', isRawString ? 'Raw String' : 'Regular String');
		
			
			}


		} catch (error) {
			console.log(error);

		}

	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
