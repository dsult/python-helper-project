import { PyrightParser } from "./parsers/PyrightParser";
import { TreeSitterParser } from "./parsers/TreeSitterParser";
import { IParser } from "./types";
import * as fs from "fs";
import { performance } from "perf_hooks";

const path = require("path");
interface FileResult {
  size: number;
  [key: string]: number; // ключ - название парсера, значение - время выполнения
}

class Benchmark {
  data: any;
  constructor(
    public parsers: IParser[] = [new PyrightParser(), new TreeSitterParser()]
  ) {}

  private async loadDataset() {
    console.log("loading dataset...");
    try {
      const data = await fs.promises.readFile(
        path.join(__dirname, "dataset", "dataset.json"),
        "utf8"
      );
      const jsonData = JSON.parse(data);
      this.data = jsonData;
      return true;
    } catch (error) {
      console.error("Ошибка чтения файла:", error);
      return false;
    }
  }

  async run() {
    await this.loadDataset();

    const resultData = [];
    console.log("testing...");

    for (const file of this.data) {
      const fileResult: FileResult = {
        size: file.size,
      };

      for (const parser of this.parsers) {
        await parser.init();

        // Время начала выполнения для текущего парсера и файла
        const startTime = performance.now();

        let some = parser.parse(file.content);

        // Время окончания выполнения для текущего парсера и файла
        const endTime = performance.now();

        // Вычисляем время выполнения в миллисекундах для текущего парсера и файла
        const executionTime = endTime - startTime;

        // Добавляем время выполнения текущего парсера в объект результата для текущего файла
        fileResult[`${parser.title}Time`] = executionTime;
      }

      resultData.push(fileResult);
    }

    const jsonData = JSON.stringify(resultData, null, 2);
    fs.writeFileSync(
      path.join(__dirname, "analysis", "results.json"),
      jsonData
    );
  }
}

const b = new Benchmark();
b.run();
