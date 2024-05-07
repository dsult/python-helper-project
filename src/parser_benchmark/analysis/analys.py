import json
import matplotlib.pyplot as plt

# Чтение данных из JSON-файла
with open('results.json', 'r') as f:
    data = json.load(f)

# Инициализация списков для хранения данных времени выполнения для каждого парсера
tree_sitter_times = []
pyright_times = []
sizes = []

# Итерация по данным и заполнение списков времени выполнения и размеров
for item in data:
    tree_sitter_times.append(item['tree-sitterTime'])
    pyright_times.append(item['pyrightTime'])
    sizes.append(item['size'])

# Построение графика времени выполнения парсеров в зависимости от размера
plt.figure(figsize=(10, 6))
plt.scatter(sizes, tree_sitter_times, label='Tree Sitter')
plt.scatter(sizes, pyright_times, label='Pyright')
plt.xlabel('Размер файла')
plt.ylabel('Время выполнения (секунды)')
plt.title('График времени выполнения парсеров в зависимости от размера файла')
plt.legend()
plt.grid(True)
plt.show()
