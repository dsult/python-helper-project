import * as vscode from 'vscode';

interface ITypingAssist {
	/**
	 * Определяет, можно ли применить этот ассист к changeEvent
	 */
	isApplicable(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): Boolean;
	/**
	 * Изменяет код
	 */
	apply(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): void;
}

/**
 * Ассист для нажатия ентра внутри строк
 */
class StringEnterTypingAssist implements ITypingAssist {
	readonly STRING_NODE_ID = 200;
	readonly QUOTE_NODE_ID = 100;
	readonly SPECIAL_CHARACTER_NODE_ID = 86;
	readonly BRACE_NODE_ID = 82;

	isApplicable(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): Boolean {

		let position = vscode.window.activeTextEditor?.selection.active;

		// проверка что это перенос строки + пробелы
		const currentNode = tree.rootNode.descendantForPosition({
			row: position?.line,
			column: position?.character
		});

		return !!((
			changeEvent.contentChanges.length === 1
			&& editor
			&& position
			&& /^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text)
			&& changeEvent.contentChanges[0].rangeLength == 0
		) && (
				(
					// нода кавычка
					currentNode.typeId === this.QUOTE_NODE_ID
					&& this.isQuote(currentNode.parent.firstChild.text)
					&& !(
						currentNode.parent.startPosition.row === position.line
						&& currentNode.parent.startPosition.column === position.character
					)
					&& !this.isCursorAfterRF(currentNode, position)
				) || (
					// нода строка
					currentNode.typeId === this.STRING_NODE_ID
					&& this.isQuote(currentNode.firstChild.text)
				) || (
					// нода фигурная скобка
					currentNode.typeId === this.BRACE_NODE_ID
					&& this.isFQuote(currentNode?.parent?.parent?.firstChild.text)
				) || (
					// нода спец знак
					currentNode.typeId === this.SPECIAL_CHARACTER_NODE_ID
					&& this.isQuote(currentNode?.parent?.firstChild.text)
					&& !this.isCursorAtSecondPos(currentNode, position)
				)
			))
	}
	apply(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): void {

		let position = vscode.window.activeTextEditor?.selection.active;

		// проверка что это перенос строки + пробелы
		const currentNode = tree.rootNode.descendantForPosition({
			row: position?.line,
			column: position?.character
		});

		if (position) {

			let stringtNode;

			switch (currentNode.typeId) {
				case this.STRING_NODE_ID:
					stringtNode = currentNode
					break;
				case this.QUOTE_NODE_ID:
				case this.SPECIAL_CHARACTER_NODE_ID:
					stringtNode = currentNode.parent
					break;
				case this.BRACE_NODE_ID:
					stringtNode = currentNode.parent.parent
					break;
				default:
					break;
			}

			const ofs1 = editor.document.offsetAt(position)
			const ofs2 = ofs1 + changeEvent.contentChanges[0].text.length
			const pos1 = position;
			const pos2 = editor.document.positionAt(ofs2);

			const openQuoteText = stringtNode.firstChild.text;
			const closeQuoteText = stringtNode.lastChild.text;
			const columnOffset = stringtNode.firstChild.startPosition.column;

			editor.edit(editBuilder => {
				editBuilder.replace(new vscode.Range(pos1, pos2), closeQuoteText + "\n" + " ".repeat(columnOffset) + openQuoteText);
			}, { undoStopAfter: false, undoStopBefore: false });
		}
	}

	isQuote = (text: string): boolean => ["'", '"', "f'", 'f"', "r'", 'r"'].includes(text);
	isRFQuote = (text: string): boolean => ["f'", 'f"', "r'", 'r"'].includes(text);
	isFQuote = (text: string): boolean => ["f'", 'f"'].includes(text);
	/**
	 * Проверяет стоит ли курсор сразу после r/f, триситтер определяет это место как строку 
	 */
	isCursorAfterRF = (node: any, position: vscode.Position): boolean => {
		// Check if the node has an 'f' or 'r' prefix
		if (this.isRFQuote(node.text)) {
			// Check if the cursor is at that position
			return position.character === node.startPosition.column + 1
				&& node.parent.startPosition.row === position.line;
		}
		return false;
	};
	isCursorAtSecondPos = (node: any, position: vscode.Position): boolean => {
		// Проверяем, что позиция курсора равна начальной позиции узла плюс один символ
		return position.character === node.startPosition.column + 1
			&& position.line === node.startPosition.row;
	};
}

/**
 * Временный доп класс
 */
class HalloWordTypingAssist implements ITypingAssist {
	isApplicable(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): Boolean {
		let position = editor.selection.active;
		return !!(
			changeEvent.contentChanges.length === 1
			&& changeEvent.contentChanges[0].rangeLength == 0
			&& position
			&& editor.document.getText(new vscode.Range(position.with(undefined, position.character - 4), position))
			+ changeEvent.contentChanges[0].text === "Hello"
		)
	}

	apply(tree: any, editor: vscode.TextEditor, changeEvent: vscode.TextDocumentChangeEvent): void {
		let position = editor.selection.active;
		if (position) {

			editor.edit(editBuilder => {
				editBuilder.replace(new vscode.Range(position.translate(0, 1), position.translate(0, 1)), " world!!!");
			}, { undoStopAfter: false, undoStopBefore: true });

		}
	}
}

class TypeAssistService {
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
		const wasmPath = path.join(__dirname, 'lib/tree-sitter-python.wasm');
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
			for (const assist of this.assistList) {
				if (assist.isApplicable(this.tree, this.editor, changeEvent)) {
					assist.apply(this.tree, this.editor, changeEvent);
					break;
				}
			}
		}
	}
}



let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {

	const assistService = new TypeAssistService([
		new StringEnterTypingAssist(),
		new HalloWordTypingAssist(),
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
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
