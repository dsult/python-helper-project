import * as vscode from 'vscode';


export interface ITypingAssist {
	/**
	 * Определяет, можно ли применить этот ассист к changeEvent
	 */
	isApplicable(context: Context): Boolean;
	/**
	 * Изменяет код
	 */
	apply(context: Context): void;
}

export interface Context {
    tree: any;
    editor: vscode.TextEditor;
    changeEvent: vscode.TextDocumentChangeEvent;
    parser: any;
}

