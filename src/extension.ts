import * as vscode from 'vscode';
import { StringSeparator } from './typing_assist/completer/StringSeparator';
import { TypeAssistService } from './typing_assist/TypeAssistService';
import { DocstringCompleter } from './typing_assist/completer/DocstringCompleter';
import { FunctionCompleter } from './typing_assist/completer/FunctionCompleter';


let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {

    const assistService = new TypeAssistService([
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

        let position = assistService.editor?.selection.active;
        if (assistService.tree && position) {

            const currentNode = assistService.tree.rootNode.descendantForPosition({
                row: position?.line,
                column: position?.character,
            });
            
            console.log(assistService.tree.rootNode.text);
            console.log(assistService.tree.rootNode.toString());
            
            console.log(currentNode);
            console.log(currentNode.type);
        }


        // await assistService.editor?.insertSnippet(
        //     new vscode.SnippetString('"some snippet"'),
        //     assistService.editor.selection.active,
        //     { undoStopBefore: false, undoStopAfter: false, }
        // )

        // await assistService.editor?.insertSnippet(
        //     new vscode.SnippetString('"some snippet222"'),
        //     assistService.editor.selection.active,
        //     { undoStopBefore: false, undoStopAfter: false, }
        // )
        
        // (async () => {
        //     await assistService.editor?.insertSnippet(
        //         new vscode.SnippetString('some'),
        //         assistService.editor?.selection.active,
        //         { undoStopBefore: false, undoStopAfter: false, }
        //     )

        //     await assistService.editor?.insertSnippet(
        //         new vscode.SnippetString('some2'),
        //         assistService.editor?.selection.active,
        //         { undoStopBefore: false, undoStopAfter: false, }
        //     )
        // })();



        undefined
        undefined
        undefined
        undefined

        // const doc = vscode.window.activeTextEditor?.document;

        // const edit = new vscode.WorkspaceEdit();

        // edit.set(doc!.uri, [
        //     vscode.SnippetTextEdit.insert(new vscode.Position(position!.line, position!.character), new vscode.SnippetString('hello ${1:world}1111')),
        // ]);

        // vscode.workspace.applyEdit(edit);
    });
    context.subscriptions.push(disposable);


    
}

export function deactivate() { }
