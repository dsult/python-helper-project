import * as vscode from "vscode";
import Parser, { SyntaxNode } from "web-tree-sitter";

export interface ITypingAssist {
  /**
   * имя в настройках
   */
  optionName: string;

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
  tree: Parser.Tree;
  parser: Parser;
  editor: vscode.TextEditor;
  changeEvent: vscode.TextDocumentChangeEvent;
  unchangedText: string;
}

export interface ExtendedSyntaxNode extends SyntaxNode {
  typeId: number;
}
