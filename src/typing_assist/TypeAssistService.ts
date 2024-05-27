import * as vscode from "vscode";
import { Context, ITypingAssist } from "./types";
import Parser from "web-tree-sitter"; // Import the module with a default import
import { resolve } from "path";

export class TypeAssistService {
  public unchangedText: string = "";
  constructor(
    public assistList: ITypingAssist[],
    public tree: Parser.Tree,
    public parser: Parser,
    public editor: vscode.TextEditor | undefined
  ) {}

  static async init(assistList: ITypingAssist[]): Promise<TypeAssistService> {
    await Parser.init(); // Call init on the imported module

    const path = require("path");
    const wasmPath = path.join(__dirname, "../lib/tree-sitter-python.wasm");
    const Python = await Parser.Language.load(wasmPath);

    let parser = new Parser(); // Create a new instance of the Parser
    parser.setLanguage(Python);

    let editor = vscode.window.activeTextEditor;

    let tree: Parser.Tree;
    if (editor) {
      tree = parser.parse(editor.document.getText());
    } else {
      tree = parser.parse("");
    }

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
        const content = doc.getText();
        this.tree = this.parser.parse(content);
        this.unchangedText = content;
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
        // !!!!!!!!!!!!!!!!!!!!!А сюда вообще можно попасть? (не по причине this.editor.document.languageId === "python")
        // console.log("дерево не сделалось???");
      }
    });

    this.tree = this.parser.parse(content, this.tree!);
    this.unchangedText = content;
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
      this.editor.document.languageId === "python" &&
      changeEvent.contentChanges.length > 0 &&
      (/^\r\n(\s)*$/.test(changeEvent.contentChanges[0].text) ||
        changeEvent.contentChanges[0].text === "()")
    ) {
      const context: Context = {
        tree: this.tree,
        editor: this.editor,
        changeEvent: changeEvent,
        parser: this.parser,
        unchangedText: this.unchangedText,
      };

      for (const assist of this.assistList) {
        if (isOn(assist.optionName) && assist.isApplicable(context)) {
          await assist.apply(context);
          //   console.log(assist.optionName);
          break;
        }
      }
    } else {
      //   console.log(
      //     "yami ",
      //     changeEvent.reason,
      //     this.editor?.document.languageId
      //   );
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
