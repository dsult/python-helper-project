import * as vscode from "vscode";
import { Context, ITypingAssist } from "./types";
import Parser from "web-tree-sitter"; // Import the module with a default import

export class TypeAssistService {
  constructor(
    public assistList: ITypingAssist[],
    public tree: Parser.Tree,
    public parser: Parser,
    public editor: vscode.TextEditor | undefined
  ) {}

  static async init(assistList: ITypingAssist[]) {
    await Parser.init(); // Call init on the imported module

    const path = require("path");
    const wasmPath = path.join(__dirname, "../lib/tree-sitter-python.wasm");
    const Python = await Parser.Language.load(wasmPath);

    let parser = new Parser(); // Create a new instance of the Parser
    parser.setLanguage(Python);

    let editor = vscode.window.activeTextEditor;

    // вот тут едитора может не быть
    const sourceCode = editor!.document.getText();
    let tree = parser.parse(sourceCode);

    return new TypeAssistService(assistList, tree, parser, editor);
  }

  /**
   * Функция которая должна применяться на изменении активного документа, оно обновляет поля активного эдитора и дерево, которое будет соответствовать новому файлу
   */
  changeDoc(e: any) {
    this.editor = vscode.window.activeTextEditor;
    if (this.editor) {
      const doc = this.editor.document;
      if (doc.languageId === "python") {
        const sourceCode = doc.getText();
        this.tree = this.parser.parse(sourceCode);
      }
    }
  }
  /**
   * инкриментальное обновление дерева
   */
  updateTree(e: vscode.TextDocumentChangeEvent) {
    const content = e.document.getText();

    e.contentChanges.forEach((change) => {
      if (!this.editor) {
        this.changeDoc(null);
      }
      if (this.editor && this.editor.document.languageId === "python") {
        // Convert VS Code's Position to Tree-sitter's Point
        const startPosition = this.editor.document.positionAt(
          change.rangeOffset
        );
        const oldEndPosition = this.editor.document.positionAt(
          change.rangeOffset + change.rangeLength
        );
        const newEndPosition = this.editor.document.positionAt(
          change.rangeOffset + change.text.length
        );
        this.tree.edit({
          startIndex: change.rangeOffset,
          oldEndIndex: change.rangeOffset + change.rangeLength,
          newEndIndex: change.rangeOffset + change.text.length,
          startPosition: {
            row: startPosition.line,
            column: startPosition.character,
          },
          oldEndPosition: {
            row: oldEndPosition.line,
            column: oldEndPosition.character,
          },
          newEndPosition: {
            row: newEndPosition.line,
            column: newEndPosition.character,
          },
        });
      } else {
        // !!!!!!!!!!!!!!!!!!!!!А сюда вообще можно попасть?
      }
    });

    this.tree = this.parser.parse(content, this.tree!);
  }

  /**
   * Перебор ассистов, поиск подходящего под изменение
   */
  async processing(changeEvent: vscode.TextDocumentChangeEvent): Promise<void> {
    if (
      this.editor &&
      // не тригириться на ctrl+z, ctrl+shift+z
      changeEvent.reason !== 1 &&
      changeEvent.reason !== 2 &&
      this.editor.document.languageId === "python"
    ) {
      const context: Context = {
        tree: this.tree,
        editor: this.editor,
        changeEvent: changeEvent,
        parser: this.parser,
      };

      for (const assist of this.assistList) {
        if (isOn(assist.optionName) && assist.isApplicable(context)) {
          await assist.apply(context);
          //   console.log(assist.optionName);
          break;
        }
      }
    }
  }
}

function isOn(optionName: string): Boolean {
  const assistOptions = vscode.workspace
    .getConfiguration()
    .get("typing-assist.assistOptions");
  const stringSeparatorEnabled =
    Array.isArray(assistOptions) && assistOptions.includes(optionName);

  return stringSeparatorEnabled;
}
