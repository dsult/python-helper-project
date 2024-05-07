import { IParser } from "../types";
import * as parseTreeUtils from "../../lib/pyright-parser/analyzer/parseTreeUtils";

import { DiagnosticSink } from "../../lib/pyright-parser/common/diagnosticSink";
import { ParseOptions, Parser } from "../../lib/pyright-parser/parser/parser";

export class PyrightParser implements IParser {
  public title: string = "pyright";
  private parser: Parser = new Parser();
  private parseOptions: ParseOptions = new ParseOptions();
  constructor() {}

  async init(): Promise<void> {
    return;
  }
  parse(text: string) {
    return this.parser.parseSourceFile(
      text,
      this.parseOptions,
      new DiagnosticSink()
    );
  }
}
