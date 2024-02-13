import * as vscode from 'vscode';


export interface ITypingAssist {
	/**
	 * Определяет, можно ли применить этот ассист к changeEvent
	 */
	isApplicable(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): Boolean;
	/**
	 * Изменяет код
	 */
	apply(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): void;
}