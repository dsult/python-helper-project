import { CharStreams, CommonTokenStream } from "antlr4ts";
import { PythonLexer } from "../../lib/antlr/PythonLexer";
import { PythonParser } from "../../lib/antlr/PythonParser";
import { IParser } from "../types";

export class ANTLRParser implements IParser {
  public title: string = "antlr";

  constructor() {}

  async init(): Promise<void> {
    return;
  }
  parse(text: string) {
    // Сохраняем оригинальную функцию console.log()
    const originalConsoleLog = console.log;

    // Переопределяем console.log(), чтобы он ничего не выводил
    console.log = function () {};

    // Ваш код для запуска функции
    let inputStream = CharStreams.fromString(text + "\n");
    let lexer = new PythonLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new PythonParser(tokenStream);
    let tree = parser.file_input();

    // Восстанавливаем оригинальную функцию console.log()
    console.log = originalConsoleLog;
  }
}
