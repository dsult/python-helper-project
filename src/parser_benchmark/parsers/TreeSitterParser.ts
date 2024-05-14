import Parser from "web-tree-sitter";
import { IParser } from "../types";

let language: Parser.Language | null | undefined = null;

export class TreeSitterParser implements IParser {
  public title: string = "tree-sitter";

  private parser: Parser | null = null;

  constructor() {}

  async init(): Promise<void> {
    if (this.parser) {
      this.parser.delete();
    }
    await Parser.init(); // Call init on the imported module
    const path = require("path");
    const wasmPath = path.join(__dirname, "../../lib/tree-sitter-python.wasm");
    if (!language) {
      language = await Parser.Language.load(wasmPath);
    }

    let parser = new Parser(); // Create a new instance of the Parser
    parser.reset();
    parser.setLanguage(language);

    this.parser = parser;
    return;
  }
  parse(text: string) {
    if (!this.isInitialized()) {
      console.log("!inited");
      return null;
    }

    return this.parser?.parse(text);
  }
  isInitialized() {
    return this.parser;
  }
}
