import json
import matplotlib.pyplot as plt
import numpy as np

y_max = 8



# Чтение данных из JSON-файла
with open('results.json', 'r') as f:
    data = json.load(f)

# Инициализация списков для хранения данных времени выполнения для каждого парсера
tree_sitter_times = []
pyright_times = []
antlr_times = []
sizes = []

# Итерация по данным и заполнение списков времени выполнения и размеров
for item in data:
    tree_sitter_times.append(item['tree-sitterTime'])
    pyright_times.append(item['pyrightTime'])
    antlr_times.append(item['antlrTime'])
    sizes.append(item['size'])


# Вычисление средних значений
mean_tree_sitter = np.mean(tree_sitter_times)
mean_pyright = np.mean(pyright_times)
mean_antlr = np.mean(antlr_times)



# вывод инфы
print(f'Всего файлов: {len(tree_sitter_times)}')
print('--------------')
print(f'Среднее время выполнения для Tree Sitter: {mean_tree_sitter:.2f} мс')
print(f'Среднее время выполнения для Pyright: {mean_pyright:.2f} мс')
print(f'Среднее время выполнения для antlr: {mean_antlr:.2f} мс')

# Построение графика времени выполнения парсеров в зависимости от размера
plt.figure(figsize=(14, 8))  # Увеличенный размер фигуры
plt.scatter(sizes, tree_sitter_times, label='Tree Sitter', alpha=0.7, zorder=2)
plt.scatter(sizes, pyright_times, label='Pyright', alpha=0.7, zorder=3)
plt.scatter(sizes, antlr_times, label='antlr', alpha=0.7, zorder=1)

# Линии тренда
z_tree_sitter = np.polyfit(sizes, tree_sitter_times, 1)
p_tree_sitter = np.poly1d(z_tree_sitter)
plt.plot(sizes, p_tree_sitter(sizes), color='blue', linestyle='-', linewidth=2, label='Tree Sitter Trend', zorder=4)

z_pyright = np.polyfit(sizes, pyright_times, 1)
p_pyright = np.poly1d(z_pyright)
plt.plot(sizes, p_pyright(sizes), color='orange', linestyle='-', linewidth=2, label='Pyright Trend', zorder=4)

z_antlr = np.polyfit(sizes, antlr_times, 1)
p_antlr = np.poly1d(z_antlr)
plt.plot(sizes, p_antlr(sizes), color='green', linestyle='-', linewidth=2, label='antlr Trend', zorder=4)

plt.xlabel('Размер файла')
plt.ylabel('Время выполнения (млсек)')
plt.title('График времени выполнения парсеров в зависимости от размера файла')
plt.legend()
plt.grid(True)
plt.ylim(0, y_max)  # Ограничение по оси Y для исключения выбросов
plt.show()