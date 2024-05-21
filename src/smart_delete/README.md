Certainly! Below is a README file for the `smartDelete` functionality, including descriptions for both `smartDeletePyright` and `smartDeleteTreeSitter` variations. This README explains the purpose of the feature, how to use it, and provides examples.

---

# smartDelete

The `smartDelete` function provides a smart way to delete code elements based on the cursor's position within a source file. This functionality is implemented using two different parsing libraries: Pyright and Tree-sitter. With `smartDelete`, you can efficiently remove decorators, lines of code, or even parts of expressions with a single command.

## Features

- **Delete decorators or the current line:** If the cursor is on a decorator, it will be removed. If the cursor is on an empty line, the whole line is deleted.
- **Delete expression parts:** In binary expressions, delete the operand and its preceding operator where the cursor is placed.

## Implementations

### smartDeletePyright

The `smartDeletePyright` implementation leverages the Pyright parser to analyze the Python code and determine the nodes for deletion. Pyright is a static type checker and linter for Python, which also provides powerful parsing capabilities.

### smartDeleteTreeSitter

The `smartDeleteTreeSitter` implementation uses Tree-sitter, a parser generator tool that produces fast and robust parsers. Tree-sitter provides a concrete syntax tree which can be used to precisely locate and delete nodes in the code.

## Usage

To use `smartDelete`, place the cursor on the code element you wish to delete and execute the `smartDelete` command (+-`ctrl+shift+backspace`). Depending on your setup, this could be integrated into your editor via a key binding or a command palette.

### Examples

#### Deleting a Decorator

```python
@dec<caret>
def f(a, v):
    pass
```

After executing `smartDelete`:

```python
<caret>
def f(a, v):
    pass
```

#### Deleting Part of an Expression

```python
some = 123 + 123<caret> + 123
```

After executing `smartDelete`:

```python
some = 123<caret> + 123
```

## Testing

To ensure the correctness and reliability of the `smartDelete` functionality, a series of tests can be added in the `src/test/smart_backspace` folder. These tests are in the `.gold` format where the cursor position is indicated by `<caret>`.

### Example Test

```text
s = "123" + "big string which <caret>hard to delete"
-------------------
s = "123"<caret>
```

In the above example, the test checks that the substring `"big string which hard to delete"` is correctly deleted when `smartDelete` is executed, leaving the cursor at the end of `"123"`.

### Running Tests

To run the tests, use the following command:

```sh
npm test
```
