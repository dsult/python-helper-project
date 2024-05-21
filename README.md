# Тайпинг Ассист для питона

## Сборка:

`npm i`

`npm run package`

## Описание

Расширение для среды разработки, предназначенное для облегчения процесса написания кода. Оно включает в себя несколько ассистентов, которые помогают автоматизировать некоторые рутинные задачи при программировании на языке Python.

## Доступные Ассистенты

### StringSeparator

Позволяет легко разделять длинные строки на более короткие с сохранением форматирования.

```python
print("some |text")
|
v
print("some "
      "text")
```

### DocstringCompleter

Автоматически расширяет докстроки в различных форматах для удобства документирования кода.

Доступные форматы:

- Plain
- NumPy
- reStructuredText
- Google
- Epytext

```python
def f(a: int, b="some") -> int:
    """|"""
|
v
def f(a: int, b="some") -> int:
    """
    |

    Parameters
    ----------
    a: int
        |
    b: Any = "some"
        |

    Returns
    -------
    int

    """
```

### FunctionCompleter

Помогает быстро завершить написание функций после ввода открывающих скобок.

```python
def my_function()
|
v
def my_function():
    pass
```

### BracketingExpressionCompleter

Автоматически оборачивает выражения в скобки после операторов присваивания или возврата, когда строки кода разбиваются на несколько строк.

```python
return some_long_expression + | another_long_expression
|
v
return (some_long_expression +
          another_long_expression)
```
