const fs = require("fs");
const path = require("path");

function readFile(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(
      filePath,
      "utf8",
      (err: any, data: string | PromiseLike<string>) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      }
    );
  });
}

export async function readTestFile(filePath: string) {
  let data = await readFile(filePath);

  // Разделяем текст на две части
  const [startPart, endPart] = data.split("\r\n-------------------\r\n");

  // Функция для поиска и удаления тега, возвращает офсет тега и текст без тега
  function extractTag(
    text: string,
    tag: string
  ): { offset: number; textWithoutTag: string } {
    const tagIndex = text.indexOf(`<${tag}>`);
    if (tagIndex === -1) {
      throw new Error(`Tag <${tag}> not found`);
    }

    // Удаляем тег из текста
    const textWithoutTag = text.replace(`<${tag}>`, "");

    return {
      offset: tagIndex,
      textWithoutTag,
    };
  }

  function getContentBetweenAngleBrackets(input: string): string {
    const startIndex = input.indexOf("<");
    if (startIndex === -1) {
      throw new Error(`symbol < not found`);
    }
    const endIndex = input.indexOf(">", startIndex + 1);
    if (endIndex === -1) {
      throw new Error(`symbol > not found`);
    }
    return input.substring(startIndex + 1, endIndex);
  }

  let insertText = getContentBetweenAngleBrackets(startPart);
  const { offset: insertOffset, textWithoutTag: startText } = extractTag(
    startPart,
    insertText
  );

  if (insertText === "\\n") {
    insertText = "\n";
  }
  // Извлекаем тег <caret> из второй части и запоминаем позицию
  const { offset: caretOffset, textWithoutTag: endText } = extractTag(
    endPart,
    "caret"
  );

  // Создаем объект с результатами
  const obj = {
    startText,
    endText,
    insertOffset,
    caretOffset,
    insertText,
  };
  return obj;
}

export function getFoldersAndFiles(directoryPath: string) {
  const result: any = {};

  // Получаем список файлов и папок в указанной директории
  const items = fs.readdirSync(directoryPath, { withFileTypes: true });

  items.forEach((item: { isDirectory: () => any; name: string | number }) => {
    if (item.isDirectory()) {
      // Если это папка, получаем список файлов внутри нее
      const folderPath = path.join(directoryPath, item.name);
      const files = fs.readdirSync(folderPath);
      result[item.name] = files;
    }
  });

  return result;
}

const directoryPath = __dirname + "/test_files";
const foldersAndFiles = getFoldersAndFiles(directoryPath);
console.log(foldersAndFiles);
