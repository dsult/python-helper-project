import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { BracketingExpressionCompleter } from "./typing_assist/completer/BracketingExpressionCompleter";
import {
  getParentWithType,
  hasParentWithType,
  isPositionInsideNode,
} from "./TreeUtils";

let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {
  const assistService = await TypeAssistService.init([
    new StringSeparator(),
    new DocstringCompleter(),
    new FunctionCompleter(),
    new BracketingExpressionCompleter(),
  ]);

  vscode.window.onDidChangeActiveTextEditor((e) => assistService.changeDoc(e));

  disposable = vscode.workspace.onDidChangeTextDocument((e) => {
    assistService.processing(e);
    assistService.updateTree(e);
  });

  context.subscriptions.push(disposable);

  // отладочная штука
  disposable = vscode.commands.registerCommand(
    "python-helper-project.test",
    async () => {
      const position = assistService.editor!.selection.active;

      const currentNode = assistService.tree.rootNode.descendantForPosition({
        row: position.line,
        column: position.character,
      });

      console.log({
        // rootNodetext: assistService.tree.rootNode.text,
        // rootNodetoString: assistService.tree.rootNode.toString(),
        currentNode: currentNode,
        currentNodetype: currentNode.type,
        currentNodetext: currentNode.text,
        currentNodeParenttype: currentNode.parent?.type,
        currentNodeParenttext: currentNode.parent?.text,
      });

      //   Надо найти ноду-правую часть от стейтмента
      if (hasParentWithType(currentNode, "expression_statement")) {
        let targetParentNode = getParentWithType(
          currentNode,
          "expression_statement"
        );
        console.log(targetParentNode?.firstChild?.lastChild?.text);
        if (targetParentNode?.firstChild?.lastChild) {
          let targetNode = targetParentNode.firstChild.lastChild;
          if (isPositionInsideNode(position, targetNode)) {
            console.log(
              "все норм, мы внутри таргет ноды (думаю что пока не обрабатываю сложные случаи)"
            );
          } else {
            console.log("мы не внутри нужной ноды");
          }
        }
      }
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
