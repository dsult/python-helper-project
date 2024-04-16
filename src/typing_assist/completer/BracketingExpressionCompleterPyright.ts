import * as vscode from "vscode";
import * as parseTreeUtils from "../../lib/pyright-parser/analyzer/parseTreeUtils";

import { Context, ITypingAssist } from "../types";
import {
  FormatStringNode,
  ParseNode,
  ParseNodeType,
  StringNode,
  isExpressionNode,
} from "../../lib/pyright-parser/parser/parseNodes";
import { DiagnosticSink } from "../../lib/pyright-parser/common/diagnosticSink";
import { ParseOptions, Parser } from "../../lib/pyright-parser/parser/parser";
import { ParseTreeWalker } from "../../lib/pyright-parser/analyzer/parseTreeWalker";
import {
  deleteSpacesAfterCoursor,
  getActiveDocumentIndentationType,
} from "../../TreeUtils";

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
    // const changeEvent: vscode.TextDocumentChangeEvent = context.changeEvent;
    const unchangedText = context.unchangedText;

    const offset = editor.document.offsetAt(editor.selection.active);

    let parseOptions = new ParseOptions();
    parseOptions.reportErrorsForParsedStringContents = true;
    const parser = new Parser();
    const diagSink = new DiagnosticSink();

    const document = editor.document;

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

    let currentNode: undefined | ParseNode = node;
    let nodesToModule = [];

    // пропуск случаев когда мы на краю скобок
    if (
      isParenthesized(currentNode) &&
      (currentNode.start + currentNode.length === offset ||
        currentNode.start === offset)
    ) {
      currentNode = currentNode.parent;
    }

    while (currentNode) {
      if (isParenthesized(currentNode)) {
        return false;
      }

      nodesToModule.push(currentNode);
      currentNode = currentNode.parent;
    }

    nodesToModule.reverse();

    for (const currentNode of nodesToModule) {
      if (
        currentNode.nodeType === ParseNodeType.BinaryOperation &&
        // проверка что мы не в конце или начале таргет ноды
        currentNode.start + currentNode.length !== offset
      ) {
        this.targetNode = currentNode;
        return true;
      }
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

    let replaceText: string;
    let columnOffset =
      document.positionAt(this.targetNode.start).character -
      changeEvent.contentChanges[0].text.length +
      3;

    if (columnOffset < 0) {
      columnOffset = 0;
    }

    const indentationType = getActiveDocumentIndentationType();
    if (indentationType === "Tabs") {
      replaceText =
        "\t".repeat(columnOffset / 4) + " ".repeat(columnOffset % 4);
    } else {
      replaceText = " ".repeat(columnOffset);
    }

    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(editor.selection.active, replaceText);
      },
      { undoStopAfter: false, undoStopBefore: false }
    );

    await deleteSpacesAfterCoursor(editor);
  }
}

const isParenthesized = (currentNode: ParseNode) => {
  return (
    ((currentNode.nodeType === ParseNodeType.BinaryOperation ||
      currentNode.nodeType === ParseNodeType.UnaryOperation) &&
      currentNode.parenthesized) ||
    (currentNode.nodeType === ParseNodeType.StringList &&
      currentNode.isParenthesized) ||
    currentNode.nodeType === ParseNodeType.Argument ||
    currentNode.nodeType === ParseNodeType.List ||
    currentNode.nodeType === ParseNodeType.Set
  );
};
