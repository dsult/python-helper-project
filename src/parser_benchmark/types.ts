export interface IParser {
  title: string;
  init(): Promise<void>; // Асинхронный метод инициализации
  parse(text: string): any; // Возвращаемый тип может быть разным для различных парсеров
}
