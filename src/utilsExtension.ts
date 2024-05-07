import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

// Функция для добавления паттерна
export function addPattern(grammarFilePath: string, patternFilePath: string) {
  const grammar = JSON.parse(fs.readFileSync(grammarFilePath, "utf8"));
  const pattern = JSON.parse(fs.readFileSync(patternFilePath, "utf8"));

  // Добавляем паттерн в массив patterns
  grammar.patterns.push(pattern);

  // Сохраняем обновленную грамматику обратно в файл
  fs.writeFileSync(grammarFilePath, JSON.stringify(grammar, null, 2), "utf8");
}

// Функция для удаления паттерна
export function removePattern(grammarFilePath: string) {
  const grammar = JSON.parse(fs.readFileSync(grammarFilePath, "utf8"));

  // Устанавливаем patterns в пустой массив
  grammar.patterns = [];

  // Сохраняем обновленную грамматику обратно в файл
  fs.writeFileSync(grammarFilePath, JSON.stringify(grammar, null, 2), "utf8");
}

export function setContextByConfiguration(
  context: string,
  configuration: string
) {
  const config = vscode.workspace.getConfiguration().get(configuration);

  vscode.commands.executeCommand("setContext", context, config);
}

export function changeConfiguration(
  event: vscode.ConfigurationChangeEvent,
  context: vscode.ExtensionContext
) {
  if (
    event.affectsConfiguration("typing-assist.enableCursorDownAfterCommentLine")
  ) {
    setContextByConfiguration(
      "typing-assist.isCursorDownAfterCommentLineOn",
      "typing-assist.enableCursorDownAfterCommentLine"
    );
  }

  if (event.affectsConfiguration("string-highlighting.json")) {
    const config: any = vscode.workspace
      .getConfiguration()
      .get("string-highlighting.json");

    const grammarFilePath = path.join(
      context.extensionPath,
      "syntaxes",
      "python-json.json"
    );

    const patternFilePath = path.join(
      context.extensionPath,
      "syntaxes",
      "python-json-pattern.json"
    );

    let isEnabled = vscode.workspace
      .getConfiguration()
      .get("string-highlighting.json");
    if (isEnabled) {
      addPattern(grammarFilePath, patternFilePath);
    } else {
      removePattern(grammarFilePath);
    }
  }
  if (event.affectsConfiguration("string-highlighting.xml")) {
    const config: any = vscode.workspace
      .getConfiguration()
      .get("string-highlighting.xml");

    const grammarFilePath = path.join(
      context.extensionPath,
      "syntaxes",
      "python-xml.json"
    );

    const patternFilePath = path.join(
      context.extensionPath,
      "syntaxes",
      "python-xml-pattern.json"
    );

    let isEnabled = vscode.workspace
      .getConfiguration()
      .get("string-highlighting.xml");
    if (isEnabled) {
      addPattern(grammarFilePath, patternFilePath);
    } else {
      removePattern(grammarFilePath);
    }
  }

  if (event.affectsConfiguration("string-highlighting.css")) {
    const config: any = vscode.workspace
      .getConfiguration()
      .get("string-highlighting.css");

    const grammarFilePath = path.join(
      context.extensionPath,
      "syntaxes",
      "python-css.json"
    );

    const patternFilePath = path.join(
      context.extensionPath,
      "syntaxes",
      "python-css-pattern.json"
    );

    let isEnabled = vscode.workspace
      .getConfiguration()
      .get("string-highlighting.css");
    if (isEnabled) {
      addPattern(grammarFilePath, patternFilePath);
    } else {
      removePattern(grammarFilePath);
    }
  }
}
