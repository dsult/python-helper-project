import * as vscode from 'vscode';
import { StringSeparator } from './typing_assist/completer/StringSeparator';
import { TypeAssistService } from './typing_assist/TypeAssistService';
import { DocstringCompleter } from './typing_assist/completer/DocstringCompleter';
import { FunctionCompleter } from './typing_assist/completer/FunctionCompleter';


let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {

    const assistService = await TypeAssistService.init([
        new StringSeparator(),
        new DocstringCompleter(),
        new FunctionCompleter(),
    ]);

    vscode.window.onDidChangeActiveTextEditor(e => assistService.changeDoc(e));

    disposable = vscode.workspace.onDidChangeTextDocument(e => {
        assistService.processing(e);
        assistService.updateTree(e);
    });

    context.subscriptions.push(disposable);


    // отладочная штука 
    disposable = vscode.commands.registerCommand('python-helper-project.test', async () => {

        const DocstringFormat = vscode.workspace
            .getConfiguration()
            .get('python-helper-project.DocstringFormat');

        console.log('Selected standard documentation:', DocstringFormat);

    });
    context.subscriptions.push(disposable);

}

export function deactivate() { }
