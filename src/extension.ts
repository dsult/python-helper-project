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

        if (assistService.editor) {
            let position = assistService.editor.selection.active;
            console.log(assistService);
            console.log(assistService.tree);

            const currentNode = assistService.tree.rootNode.descendantForPosition({
                row: position?.line,
                column: position?.character,
            });

            // console.log(assistService.tree.rootNode.text);
            // console.log(assistService.tree.rootNode.toString());

            console.log(currentNode);
            console.log(currentNode.type);
        }

    });
    context.subscriptions.push(disposable);

}

export function deactivate() { }
