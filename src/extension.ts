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

	disposable = vscode.workspace.onDidChangeTextDocument(e => {
		// if (e.contentChanges[0].rangeLength > 0) {
		// 	return
		// }

		let position = vscode.window.activeTextEditor?.selection.active;

		// проверка что это перенос строки + пробелы
		if (e.contentChanges.length === 1 && /^\r\n(\s)*$/.test(e.contentChanges[0].text) && editor && position && e.contentChanges[0].rangeLength == 0) {



			const currentNode = tree.rootNode.descendantForPosition({
				row: position?.line,
				column: position?.character
			});


			// если мы в ноде-кавычке, то есть это пока работает на последнем символе строки
			if (currentNode.typeId === 100 && (currentNode.text === "'" || currentNode.text === '"')) {

				const ofs1 = editor.document.offsetAt(position)
				const ofs2 = ofs1 + e.contentChanges[0].text.length
				const pos1 = position;
				const pos2 = editor.document.positionAt(ofs2);

				editor.edit(editBuilder => {
					editBuilder.replace(new vscode.Range(pos1, pos2), currentNode.text + " +\n" + " ".repeat(currentNode.parent.firstChild.startPosition.column) + currentNode.text);
				}, { undoStopAfter: false, undoStopBefore: false });

			}

			// // если мы внутри строки
			// if (currentNode.typeId === 200) {
			// 	// const strType = currentNode.text.slice(0, 3);
			// 	console.log(currentNode.text.slice(0, 3));

			// }




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


		// если всего один символ добавили
		if (e.contentChanges.length === 1 && e.contentChanges[0].text.length === 1) {

			if (editor) {
				const position = editor.selection.active;

				const text = editor.document.getText(new vscode.Range(position.translate(0, -4), position.translate(0, 1)));
				if (text === 'Hello') {
					const edit = new vscode.WorkspaceEdit();
					edit.replace(editor.document.uri, new vscode.Range(position.translate(0, 1), position.translate(0, 1)), ", word!1!");
					vscode.workspace.applyEdit(edit);
				}
			}
		}
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

			console.log(currentNode.text);
			console.log(currentNode);
			console.log(tree.rootNode.text)
			console.log(tree.rootNode.hasError())
		}

	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
