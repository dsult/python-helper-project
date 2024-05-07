import pyarrow.parquet as pq
import json

# Открываем Parquet файл для чтения
parquet_file = pq.ParquetFile('train-00000-of-00206.parquet')

# Получаем список колонок в файле
columns = parquet_file.schema.names

# Читаем только выбранные колонки ('content' и 'size')
columns_to_read = ['content', 'size']
table = parquet_file.read(columns=columns_to_read)

# Преобразуем данные в pandas DataFrame
df = table.to_pandas()

nrows = 10000
df = df.head(nrows)

# Преобразуем DataFrame в список словарей
data = df.to_dict(orient='records')

print(len(df))

# Сериализуем данные в JSON и записываем в файл
with open('dataset.json', 'w') as json_file:
    json.dump(data, json_file)

# # # Выводим первые несколько строк
# print(df.head())
