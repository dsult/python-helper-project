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
		const sourceCode = editor.document.getText();
		tree = parser.parse(sourceCode);
	}


	disposable = vscode.workspace.onDidChangeTextDocument(e => {

		// console.log(tree);


		// далее надо оформить сюда обновлениедерева при изменении дока

		const content = e.document.getText();

		// Use tree.edit to update the syntax tree based on document changes
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


		// Update the syntax tree with the modified content
		tree = parser.parse(content, tree);

		// console.log(e.contentChanges);

		// console.log(tree.rootNode.toString());

		// console.log(e);
		// console.log(e.contentChanges.length);
		// console.log(e.contentChanges[0].text.length);

		// проверка что это перенос строки + пробелы
		if (e.contentChanges.length === 1 && /^\r\n(\s)*$/.test(e.contentChanges[0].text)) {

			const position = editor?.selection.active;

			const currentNode = tree.rootNode.descendantForPosition({
				row: position?.line,
				column: position?.character
			});

			console.log(currentNode);
			

			// console.log(currentNode.typeId === 100 && (currentNode.text === "'" || currentNode.text === '"') && editor && position);
			// console.log('currentNode.typeId === 100', currentNode.typeId === 100);
			// console.log('(currentNode.text ===  || currentNode.text === ', (currentNode.text === "'" || currentNode.text === '"'));
			// console.log('editor', editor);
			// console.log('position', position);

			if (currentNode.typeId === 100 && (currentNode.text === "'" || currentNode.text === '"') && editor && position) {
				const edit = new vscode.WorkspaceEdit();
				edit.replace(editor.document.uri, new vscode.Range(position, position), currentNode.text
					+ " + \n" + " ".repeat(currentNode.parent.parent.firstChild.startPosition.column)
					+ currentNode.text);
				vscode.workspace.applyEdit(edit);
			}



		}



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



	// тест штука, пытаюсь сделать правильный перенос
	disposable = vscode.commands.registerCommand('python-helper-project.test', async () => {

		const position = editor?.selection.active;


		const currentNode = tree.rootNode.descendantForPosition({
			row: position?.line,
			column: position?.character
		});

		if (currentNode && position) {

			console.log(tree);

			console.log(currentNode);
			// console.log(Math.floor(currentNode.previousSibling.startPosition.column / 4));

			if (currentNode.typeId === 100 && (currentNode.text === "'" || currentNode.text === '"')) {
				// console.log('я так понимаю мы можем делать умный перенос с использованием ' + currentNode.text);
				const edit = new vscode.WorkspaceEdit();
				edit.replace(editor.document.uri, new vscode.Range(position, position), currentNode.text
					+ " + \n" + " ".repeat(currentNode.parent.parent.firstChild.startPosition.column)
					+ currentNode.text);
				vscode.workspace.applyEdit(edit);
			}

		} else {
			console.log('Не удалось найти узел для указанных координат.');
		}

	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
