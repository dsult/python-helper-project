import * as vscode from "vscode";
import { StringSeparator } from "./typing_assist/completer/StringSeparator";
import { TypeAssistService } from "./typing_assist/TypeAssistService";
import { DocstringCompleter } from "./typing_assist/completer/DocstringCompleter";
import { FunctionCompleter } from "./typing_assist/completer/FunctionCompleter";
import { BracketingExpressionCompleter } from "./typing_assist/completer/BracketingExpressionCompleter";
import { NewlineSpaceRemover } from "./typing_assist/completer/NewlineSpaceRemover";
import { SyntaxNode } from "web-tree-sitter";
import { CommentSeparator } from "./typing_assist/completer/CommentSeparator";
import { ReturnDedent } from "./typing_assist/completer/ReturnDedent";

let disposable: vscode.Disposable | undefined;

export async function activate(context: vscode.ExtensionContext) {
  const assistService = await TypeAssistService.init([
    new StringSeparator(),
    new DocstringCompleter(),
    new FunctionCompleter(),
    new BracketingExpressionCompleter(),
    new NewlineSpaceRemover(),
    new CommentSeparator(),
    new ReturnDedent(),
  ]);

  vscode.window.onDidChangeActiveTextEditor((e) => assistService.changeDoc(e));

  disposable = vscode.workspace.onDidChangeTextDocument((e) => {
    // console.log(e);
    assistService.processing(e);
    assistService.updateTree(e);
  });

  context.subscriptions.push(disposable);

  // отладочная штука
  disposable = vscode.commands.registerCommand(
    "python-helper-project.test",
    async () => {
      class SampleInlayHintsProvider {
        provideInlayHints(
          document: any,
          range: { start: { line: number; character: number } },
          token: any
        ) {
          const position = new vscode.Position(
            range.start.line,
            range.start.character
          );
          const hint = new vscode.InlayHint(
            position,
            "some hint",
            vscode.InlayHintKind.Type
          );
          return [hint];
        }
      }
      // await fillTreeSitterMissingNodes(assistService);

      const provider = new SampleInlayHintsProvider();
      const selector = { scheme: "file", language: "python" };

      context.subscriptions.push(
        vscode.languages.registerInlayHintsProvider(selector, provider)
      );
    }
  );
  context.subscriptions.push(disposable);

  setContextByConfiguration(
    "typing-assist.isCursorDownAfterCommentLineOn",
    "typing-assist.enableCursorDownAfterCommentLine"
  );

  vscode.workspace.onDidChangeConfiguration((event) => {
    if (
      event.affectsConfiguration(
        "typing-assist.enableCursorDownAfterCommentLine"
      )
    ) {
      setContextByConfiguration(
        "typing-assist.isCursorDownAfterCommentLineOn",
        "typing-assist.enableCursorDownAfterCommentLine"
      );
    }
  });
}

async function fillTreeSitterMissingNodes(assistService: TypeAssistService) {
  const missingNodes: SyntaxNode[] = [];

  function traverseTree(node: SyntaxNode): void {
    node.children.forEach((n: SyntaxNode) => {
      if (n.isMissing()) {
        missingNodes.push(n);
      }
      traverseTree(n);
    });
  }

  traverseTree(assistService.tree.rootNode);

  const editor = vscode.window.activeTextEditor;
  const document = vscode.workspace.textDocuments[0];

  console.log(missingNodes);

  const edits: { position: vscode.Position; newText: string }[] = [];

  missingNodes.forEach((missingNode: SyntaxNode) => {
    const position = document.positionAt(missingNode.startIndex);
    edits.push({ position, newText: missingNode.type });
  });

  await editor?.edit(
    (editBuilder) => {
      edits.forEach(({ position, newText }) => {
        editBuilder.replace(position, newText);
      });
    },
    { undoStopAfter: false, undoStopBefore: false }
  );
}

function setContextByConfiguration(context: string, configuration: string) {
  const config = vscode.workspace.getConfiguration().get(configuration);

  vscode.commands.executeCommand("setContext", context, config);
}

export function deactivate() {}
