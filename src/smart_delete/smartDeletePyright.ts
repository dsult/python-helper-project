import * as vscode from "vscode";
import * as parseTreeUtils from "../lib/pyright-parser/analyzer/parseTreeUtils";

import { DiagnosticSink } from "../lib/pyright-parser/common/diagnosticSink";
import { ParseOptions, Parser } from "../lib/pyright-parser/parser/parser";

// import { convertToPosition as convertTSPointToPosition } from "../TreeUtils";
import { getChildNodes } from "../lib/pyright-parser/analyzer/parseTreeWalker";
import {
  ParseNodeType,
  isExpressionNode,
} from "../lib/pyright-parser/parser/parseNodes";
import { getPreviousSibling } from "../utilsPR";
import {
  findFirstNonWhitespaceCharPositionToLeft,
  findPreviousPosition,
} from "./utils";

export function smartDeletePyright(): (...args: any[]) => any {
  return async () => {
    let editor = vscode.window.activeTextEditor;

    if (!editor) {
      return;
    }

    let parseOptions = new ParseOptions();
    const parser = new Parser();
    let text;

    text = editor.document.getText();

    let some = parser.parseSourceFile(text, parseOptions, new DiagnosticSink());
    const position = editor.selection.active;

    let currentNode = parseTreeUtils.findNodeByPosition(
      some.parserOutput.parseTree,
      position,
      some.tokenizerOutput.lines
    );

    if (
      currentNode?.nodeType === ParseNodeType.String ||
      currentNode?.nodeType === ParseNodeType.FormatString
    ) {
      currentNode = currentNode.parent;
    }

    if (!currentNode) {
      return;
    }

    const leftPosition = findPreviousPosition(editor, position);

    const leftCharacter = editor.document.getText(
      new vscode.Range(leftPosition, position)
    );

    let leftDeletePosition: vscode.Position;
    let rightDeletePosition = position;

    const isBinary =
      currentNode.parent?.nodeType === ParseNodeType.BinaryOperation;
    const isArgument = currentNode.parent?.nodeType === ParseNodeType.Argument;
    const isDecorator =
      currentNode.parent?.nodeType === ParseNodeType.Decorator;

    switch (true) {
      //   case leftCharacter === " " ||
      //     leftCharacter === "\t" ||
      //     leftCharacter === "\n" || // (для линукса???)
      //     leftCharacter === "\r\n":
      //     leftDeletePosition = findFirstNonWhitespaceCharPositionToLeft(
      //       editor,
      //       position
      //     );

      //     break;

      case isBinary:
        rightDeletePosition = editor.document.positionAt(
          currentNode.start + currentNode.length
        );
        const previousSibling = getPreviousSibling(currentNode);
        if (previousSibling) {
          leftDeletePosition = editor.document.positionAt(
            previousSibling.start + previousSibling.length
          );
        }
        break;

      case isDecorator:
        rightDeletePosition = editor.document.positionAt(
          currentNode.start + currentNode.length
        );

        leftDeletePosition = editor.document.positionAt(currentNode.start - 1);

        break;

      case isArgument:
        rightDeletePosition = editor.document.positionAt(
          currentNode.start + currentNode.length
        );
        if (currentNode.parent?.parent?.nodeType) {
          const previousSibling = getPreviousSibling(currentNode.parent);
          if (previousSibling) {
            leftDeletePosition = editor.document.positionAt(
              previousSibling.start + previousSibling.length
            );
          }
        }
        break;

      default:
        //   console.log(123);
        //   console.log(currentNode);
        leftDeletePosition = editor.document.positionAt(currentNode.start);
        rightDeletePosition = editor.document.positionAt(
          currentNode.start + currentNode.length
        );
        break;
    }
    await editor.edit(
      (editBuilder) => {
        editBuilder.replace(
          new vscode.Range(leftDeletePosition, rightDeletePosition),
          ""
        );
      },
      { undoStopAfter: false, undoStopBefore: false }
    );

    return;
  };
}
