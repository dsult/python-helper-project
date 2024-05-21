# Python Typing Assistant

## Description

This extension for development environments aims to streamline the coding process by providing several assistants to automate some routine tasks when programming in Python.

## Available Assistants

### StringSeparator

Allows easy splitting of long strings into shorter ones while preserving formatting.

```python
print(r"some<\n> test")
-------------------
print(r"some"
      r"<caret> test")
```

### DocstringCompleter

Automatically expands docstrings into various formats for convenient code documentation.

Available formats:

- Plain
- NumPy
- reStructuredText
- Google
- Epytext

```python
def f(self, var1, var2, *args, long_var_name="hi", only_seldom_used_keyword: int = 0, **kwargs) -> int:
    """<\n>"""
-------------------
def f(self, var1, var2, *args, long_var_name="hi", only_seldom_used_keyword: int = 0, **kwargs) -> int:
    """


    Parameters
    ----------
    var1: Any
        <caret>
    var2: Any

    *args: iterable

    long_var_name: Any = "hi"

    only_seldom_used_keyword: int = 0

    **kwargs: dict


    Returns
    -------
    int

    """
```

### FunctionCompleter

Helps quickly complete writing functions after typing opening parentheses.

```python
def f<()>
-------------------
def f(<caret>):
    pass
```

```python
class A:
    def f<()>
-------------------
class A:
    def f(self<caret>):
        pass
```

### BracketingExpressionCompleter

Automatically wraps expressions in parentheses after assignment or return operators when lines of code are split into multiple lines.

```python
some = "123"<\n> + 123
-------------------
some = ("123"
        <caret>+ 123)
```

```python
return some + some_else + 123 +<\n> (' 12'
                                ''
                                ''
                                '3123')
-------------------

return (some + some_else + 123 +
        <caret>(' 12'
                                ''
                                ''
                                '3123'))
```

There is also a version of this completer that uses the Pyright parser.

### CommentSeparator

Correctly splits comments

```python
# some<\n> test
-------------------
# some
# <caret>test
```

### NewlineSpaceRemover

Removes spaces after the cursor when breaking a line

```python

                return (some +       some_else)<\n>
-------------------
                return (some +       some_else)
            <caret>
```

### ReturnDedent

Dedents after pressing enter at the end of a return statement

```python
            def f():
                return some + some_else<\n>
-------------------
            def f():
                return some + some_else
            <caret>
```

## Testing

Tests are located in the `\src\test\typing_assist` folder. To run the tests, use the command `npm test`. The test format follows the examples shown above. Before the separator in angle brackets, the text indicates what should be written to trigger the assistant. After the separator, the `<caret>` indicates the final cursor position.

Example:

```python
# some<\n> test
-------------------
# some
# <caret>test
```
