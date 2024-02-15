import * as vscode from 'vscode';
import { Context, ITypingAssist } from "./types";

export class TypeAssistService {
	assistList: ITypingAssist[];
	parser: any;
	tree: any;
	editor: vscode.TextEditor | undefined;

	/**
	 * 
	 * @param assistList список ассистов которые далее будут отрабатывать
	 */
	constructor(assistList: ITypingAssist[]) {
		this.assistList = assistList;
		this.init();
	}

	/**
	 *  Качает все что там нужно и кладет в поля класса. Это всё происходит не в конструкторе, потому что нельзя сделать асинхронный конструктор. А тут есть асинхронные штуки, и оборачивать код в .then, желания нет
	 */
	async init() {
		const Parser = require('web-tree-sitter');
		await Parser.init();
		const parser = new Parser;

		const path = require('path');
		const wasmPath = path.join(__dirname, '../lib/tree-sitter-python.wasm');
		const Python = await Parser.Language.load(wasmPath);
		parser.setLanguage(Python);

		let editor = vscode.window.activeTextEditor;
		let tree: any;
		if (editor) {
			const sourceCode = editor.document.getText();
			tree = parser.parse(sourceCode);
		}

		this.parser = parser;
		this.tree = tree;
		this.editor = editor;

	}
	/**
	 * Функция которая должна применяться на изменении активного документа, оно обновляет поля активного эдитора и дерево, которое будет соответствовать новому файлу
	 */ 
	changeDoc(e: any) {
		this.editor = vscode.window.activeTextEditor;
		if (this.editor) {
			const sourceCode = this.editor.document.getText();
			this.tree = this.parser.parse(sourceCode);
		}
	}
	/**
	 * инкриментальное обновление дерева
	 */
	updateTree(e: vscode.TextDocumentChangeEvent) {
        
        const content = e.document.getText();
		e.contentChanges.forEach(change => {
            // console.log(this.tree.hasEr);
            
			this.tree.edit({
				startIndex: change.rangeOffset,
				oldEndIndex: change.rangeOffset + change.rangeLength,
				newEndIndex: change.rangeOffset + change.text.length,
				startPosition: this.editor?.document.positionAt(change.rangeOffset),
				oldEndPosition: this.editor?.document.positionAt(change.rangeOffset + change.rangeLength),
				newEndPosition: this.editor?.document.positionAt(change.rangeOffset + change.text.length),
			});
		});

		this.tree = this.parser.parse(content, this.tree);

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
