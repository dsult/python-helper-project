import * as vscode from 'vscode';

let disposable: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {

	// disposable = vscode.window.onDidChangeActiveTextEditor(editor => {
	// 	if (editor) {
	// 		console.log(`Active editor changed to ${editor.document.uri}`);

	// 	}
	// });

	// context.subscriptions.push(disposable);

	disposable = vscode.workspace.onDidChangeTextDocument(e => {
		// если всего один символ добавили
		if (e.contentChanges.length === 1 && e.contentChanges[0].text.length === 1) {

			const editor = vscode.window.activeTextEditor;
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

	// тест штука, сейчас она вставляет Hello, world! на позицию курсора
	disposable = vscode.commands.registerCommand('python-helper-project.test', () => {

		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const edit = new vscode.WorkspaceEdit();
			// const position = new vscode.Position(0, 0);
			const position = editor.selection.active;

			const text = 'Hello, world!';
			edit.replace(editor.document.uri, new vscode.Range(position, position), text);
			vscode.workspace.applyEdit(edit);
		}

	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
