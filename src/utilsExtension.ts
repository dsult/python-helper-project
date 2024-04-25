import * as vscode from "vscode";

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
