import * as vscode from 'vscode';
import { Context, ITypingAssist } from "./types";
import Parser from 'web-tree-sitter'; // Import the module with a default import

export class TypeAssistService {
    assistList: ITypingAssist[];
    parser: Parser; // Use the TreeSitter type for the parser
    tree: Parser.Tree | null; // Use the Tree type and allow for null
    editor: vscode.TextEditor | undefined;

    constructor(assistList: ITypingAssist[]) {
        this.assistList = assistList;
        this.parser = {} as Parser; // Initialize with type assertion
        this.tree = null; // Initialize as null
        this.init();
    }

    async init() {
        await Parser.init(); // Call init on the imported module

        const path = require('path');
        const wasmPath = path.join(__dirname, '../lib/tree-sitter-python.wasm');
        const Python = await Parser.Language.load(wasmPath);
        
        this.parser = new Parser(); // Create a new instance of the Parser
        this.parser.setLanguage(Python);

        let editor = vscode.window.activeTextEditor;
        if (editor) {
            const sourceCode = editor.document.getText();
            this.tree = this.parser.parse(sourceCode);
        }

        this.editor = editor;
    }

    /**
     * Функция которая должна применяться на изменении активного документа, оно обновляет поля активного эдитора и дерево, которое будет соответствовать новому файлу
     */
    changeDoc(e: any) {
        this.editor = vscode.window.activeTextEditor;
        const sourceCode = this.editor!.document.getText();
        this.tree = this.parser.parse(sourceCode);
    }
    /**
     * инкриментальное обновление дерева
     */
    updateTree(e: vscode.TextDocumentChangeEvent) {
        const content = e.document.getText();
        e.contentChanges.forEach(change => {
            
            if (this.editor) {
                // Convert VS Code's Position to Tree-sitter's Point
                const startPosition = this.editor.document.positionAt(change.rangeOffset);
                const oldEndPosition = this.editor.document.positionAt(change.rangeOffset + change.rangeLength);
                const newEndPosition = this.editor.document.positionAt(change.rangeOffset + change.text.length);
                this.tree!.edit({
                    startIndex: change.rangeOffset,
                    oldEndIndex: change.rangeOffset + change.rangeLength,
                    newEndIndex: change.rangeOffset + change.text.length,
                    startPosition: { row: startPosition.line, column: startPosition.character },
                    oldEndPosition: { row: oldEndPosition.line, column: oldEndPosition.character },
                    newEndPosition: { row: newEndPosition.line, column: newEndPosition.character },
                });
            } else {
                console.error("Ну че, надо сделать полное обновление дока видимо");
            }
        });

        this.tree = this.parser.parse(content, this.tree!);
    }

    /**
     * Перебор ассистов, поиск подходящего под изменение
     */
    processing(changeEvent: vscode.TextDocumentChangeEvent): void {
        if (this.editor) {

            const context: Context = {
                tree: this.tree,
                editor: this.editor,
                changeEvent: changeEvent,
                parser: this.parser,
            };

            for (const assist of this.assistList) {
                if (assist.isApplicable(context)) {
                    assist.apply(context);
                    break;
                }
            }
        }
    }
}
