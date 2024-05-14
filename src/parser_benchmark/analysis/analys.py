import json
import matplotlib.pyplot as plt
import numpy as np

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

# Функция для удаления выбросов выше 99-го процентиля
def remove_outliers(x, y):
    threshold = np.percentile(y, 99.5)
    x_filtered = [x[i] for i in range(len(y)) if y[i] <= threshold]
    y_filtered = [y[i] for i in range(len(y)) if y[i] <= threshold]
    return x_filtered, y_filtered

# Применение функции к данным
sizes_tree_sitter, tree_sitter_times_filtered = remove_outliers(sizes, tree_sitter_times)
sizes_pyright, pyright_times_filtered = remove_outliers(sizes, pyright_times)
sizes_antlr, antlr_times_filtered = remove_outliers(sizes, antlr_times)

# Построение графика времени выполнения парсеров в зависимости от размера
plt.figure(figsize=(10, 6))
plt.scatter(sizes_tree_sitter, tree_sitter_times_filtered, label='Tree Sitter', s=20, alpha=0.5, color='blue')
plt.scatter(sizes_pyright, pyright_times_filtered, label='Pyright', s=20, alpha=0.5, color='orange')
plt.scatter(sizes_antlr, antlr_times_filtered, label='antlr', s=20, alpha=0.5, color='green')

# Сортировка массивов по размеру файла
sorted_indices = np.argsort(sizes)
sizes_sorted = np.array(sizes)[sorted_indices]
tree_sitter_times_sorted = np.array(tree_sitter_times)[sorted_indices]
pyright_times_sorted = np.array(pyright_times)[sorted_indices]
antlr_times_sorted = np.array(antlr_times)[sorted_indices]

# Применение функции удаления выбросов к отсортированным данным
sizes_tree_sitter, tree_sitter_times_filtered = remove_outliers(sizes_sorted, tree_sitter_times_sorted)
sizes_pyright, pyright_times_filtered = remove_outliers(sizes_sorted, pyright_times_sorted)
sizes_antlr, antlr_times_filtered = remove_outliers(sizes_sorted, antlr_times_sorted)

# Подгонка полиномиальной модели и построение линии тренда для каждого парсера
z_tree_sitter = np.polyfit(sizes_tree_sitter, tree_sitter_times_filtered, 1)
p_tree_sitter = np.poly1d(z_tree_sitter)
plt.plot(sizes_tree_sitter, p_tree_sitter(sizes_tree_sitter), "b--")

z_pyright = np.polyfit(sizes_pyright, pyright_times_filtered, 1)
p_pyright = np.poly1d(z_pyright)
plt.plot(sizes_pyright, p_pyright(sizes_pyright), "y--")

z_antlr = np.polyfit(sizes_antlr, antlr_times_filtered, 1)
p_antlr = np.poly1d(z_antlr)
plt.plot(sizes_antlr, p_antlr(sizes_antlr), "g--")


plt.xlabel('Размер файла')
plt.ylabel('Время выполнения (ms)')
plt.title('График времени выполнения парсеров в зависимости от размера файла (в символах)')
plt.legend()
plt.grid(True)
# plt.xscale('log')

plt.show()
