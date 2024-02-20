import * as vscode from 'vscode';
import TreeSitter from 'web-tree-sitter';

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
    parser: TreeSitter;
    editor: vscode.TextEditor;
    changeEvent: vscode.TextDocumentChangeEvent;
}

