import * as vscode from 'vscode';
import { StringSeparator } from './typing_assist/completer/StringSeparator';
import { HalloWordCompleter } from './typing_assist/completer/HalloWordTypingAssist';
import { TypeAssistService } from './typing_assist/TypeAssistService';


let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {

	const assistService = new TypeAssistService([
		new StringSeparator(),
		new HalloWordCompleter(),
	]);

	vscode.window.onDidChangeActiveTextEditor(e => assistService.changeDoc(e));

	disposable = vscode.workspace.onDidChangeTextDocument(e => {
		assistService.processing(e);
		assistService.updateTree(e);
	});

	context.subscriptions.push(disposable);


	// отладочная штука 
	disposable = vscode.commands.registerCommand('python-helper-project.test', async () => {
		console.log(assistService);

		vscode.commands.executeCommand("editor.action.insertSnippet", {
			"snippet": "print(${1:bla})$0"
		})
		
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
