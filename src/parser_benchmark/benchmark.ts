import { ANTLRParser } from "./parsers/ANTLRParser";
import { PyrightParser } from "./parsers/PyrightParser";
import { TreeSitterParser } from "./parsers/TreeSitterParser";
import { IParser } from "./types";
import * as fs from "fs";
import { performance } from "perf_hooks";

const path = require("path");
interface ResultFile {
  size: number;
  [key: string]: number; // ключ - название парсера, значение - время выполнения
}

class ParserBenchmark {
  data: any;
  datasetFiles: string[] = [];
  readonly repeatN = 5;
  readonly datasetDir = "dataset";
  constructor(
    public parsers: IParser[] = [
      new PyrightParser(),
      new TreeSitterParser(),
      new ANTLRParser(),
    ]
  ) {}

  private async loadDataset(fileName: string) {
    try {
      const data = await fs.promises.readFile(
        path.join(__dirname, this.datasetDir, fileName),
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

  private async wormUp() {
    for (const parser of this.parsers) {
      await parser.init();
      for (let index = 0; index < 20; index++) {
        parser.parse("some content to warm");
      }
    }
  }

  private getAllJsonFilesInDirectory(directoryPath: string) {
    // Проверяем, существует ли директория
    if (!fs.existsSync(directoryPath)) {
      throw new Error(`Directory ${directoryPath} does not exist`);
    }

    // Получаем все файлы в директории
    const files = fs.readdirSync(directoryPath);

    // Фильтруем только JSON файлы
    const jsonFiles = files.filter((file) => path.extname(file) === ".json");
    this.datasetFiles = jsonFiles;
  }

  async run() {
    this.getAllJsonFilesInDirectory(path.join(__dirname, this.datasetDir));

    await this.wormUp();
    const resultData = [];

    for (
      let batchIndex = 0;
      batchIndex < this.datasetFiles.length;
      batchIndex++
    ) {
      await this.loadDataset(this.datasetFiles[batchIndex]);

      const { SingleBar } = require("cli-progress");
      const progressBar = new SingleBar({
        format:
          this.datasetFiles[batchIndex] +
          ": {bar} {percentage}% | {value}/{total}",
        barCompleteChar: "\u2588",
        barIncompleteChar: "\u2591",
        hideCursor: true,
      });

      // Отображаем прогресс-бар перед началом цикла
      progressBar.start(this.data.length, 0);

      for (let dataIndex = 0; dataIndex < this.data.length; dataIndex++) {
        const file = this.data[dataIndex];
        const fileResult: ResultFile = {
          size: file.size,
        };

        for (const parser of this.parsers) {
          // Время начала выполнения для текущего парсера и файла
          await parser.init();
          const startTime = performance.now();

          this.repeatN;
          for (let repeatIndex = 0; repeatIndex < this.repeatN; repeatIndex++) {
            try {
              await parser.parse(file.content);
            } catch (error) {
              console.log("catch", parser.title);
              break;
            }
          }

          // Время окончания выполнения для текущего парсера и файла
          const endTime = performance.now();

          // Вычисляем время выполнения в миллисекундах для текущего парсера и файла
          const executionTime = (endTime - startTime) / this.repeatN;

          // Добавляем время выполнения текущего парсера в объект результата для текущего файла
          fileResult[`${parser.title}Time`] = executionTime;
        }

        resultData.push(fileResult);
        progressBar.update(dataIndex + 1);
      }
      progressBar.stop();
    }

    const jsonData = JSON.stringify(resultData, null, 2);
    fs.writeFileSync(
      path.join(__dirname, "analysis", "results.json"),
      jsonData
    );
  }
}

const b = new ParserBenchmark();

b.run().catch((error) => {
  console.error("кетч в самом конце", error);
});
