import * as vscode from "vscode";
import * as parseTreeUtils from "../../lib/pyright-parser/analyzer/parseTreeUtils";

import { Context, ITypingAssist } from "../types";
import {
  ParseNode,
  ParseNodeType,
} from "../../lib/pyright-parser/parser/parseNodes";
import { DiagnosticSink } from "../../lib/pyright-parser/common/diagnosticSink";
import { ParseOptions, Parser } from "../../lib/pyright-parser/parser/parser";

/**
 * оборачивает выражение в скобки при нажатии ентра если это нужно
 */
export class BracketingExpressionCompleterPyright implements ITypingAssist {
  optionName: string = "BracketingExpressionCompleter";

  /**
   * нода, которую мы собираемся оборачивать в скобки
   */
  targetNode: ParseNode | null = null;

  isApplicable(context: Context): Boolean {
    const editor = context.editor;
    const changeEvent: vscode.TextDocumentChangeEvent = context.changeEvent;
    const unchangedText = context.unchangedText;

    let parseOptions = new ParseOptions();
    parseOptions.reportErrorsForParsedStringContents = true;
    const parser = new Parser();
    const diagSink = new DiagnosticSink();

    const document = editor.document;

    const unchangedVersion =
      document.version - changeEvent.contentChanges.length;
    const unchangedDocument = vscode.workspace.textDocuments.find(
      (doc) =>
        doc.uri.toString() === document.uri.toString() &&
        doc.version === unchangedVersion
    );

    // console.log(text);
    // console.log(unchangedDocument);
    // console.log(document);

    let parseFileResults = parser.parseSourceFile(
      unchangedText,
      parseOptions,
      diagSink
    );

    const node = parseTreeUtils.findNodeByPosition(
      parseFileResults.parserOutput.parseTree,
      editor.selection.active,
      parseFileResults.tokenizerOutput.lines
    );

    if (!node?.parent) {
      return false;
    }

    if (node.nodeType === ParseNodeType.BinaryOperation) {
      this.targetNode = node;
      return true;
    }
    if (node.parent.nodeType === ParseNodeType.BinaryOperation) {
      this.targetNode = node.parent;
      return true;
    }

    return false;
  }
  async apply(context: Context): Promise<void> {
    const editor = context.editor;
    const changeEvent = context.changeEvent;
    const document = editor.document;

    // console.log("выполняемся");
    // console.log(changeEvent);

    if (!this.targetNode) {
      return;
    }

    let pos1 = document.positionAt(this.targetNode.start);
    let pos2 = document.positionAt(
      this.targetNode.start +
        this.targetNode.length +
        changeEvent.contentChanges[0].text.length
    );

    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(pos1, "(");
      },
      { undoStopAfter: false, undoStopBefore: false }
    );

    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(pos2, ")");
      },
      { undoStopAfter: false, undoStopBefore: false }
    );
  }
}
