Что сделано
---

- #### Подключить три-ситтер
- #### сделать хоть как-то штуку с переносом строки

0.0.6 - нормально делаются переносы строк, кажется багов не осталось. Не совсем понятно что делать с fr/rf строками, и надо ли

- #### сделать хоть как-то штуку с переносом строки

- исправлен ентр до знака \{ в f строках 
- исправлен ентр до знака \n

0.0.7 - 2 крайних случая сверху + обобщил получение штук при помощи stringtNode
0.0.8 - микро рефакторинг, + несколько классов

- норм такой рефакторинг, вся логика унесена внутрь классов
- #### сделана норм архитектура этой штуки
- в ассисте отдельно идет проверка применимости и применение
- после того как нашелся применимый ассист, выходим из сервиса
- id нод вынесены в константы класса ассиста

0.1.0 - норм рефакторинг такой, осталось разбить на файлики и можно начинать делать новые ассисты

- раскидать по файликам красиво

0.1.1 - получается архитектура готова
0.1.2 - небольшой шаблон для докстринги

- сделать ассист для док стринги хоть как-то
- понять почему дерево ломается при вставке класса(не понял но починил, убрал халлокласс) 
- ассист обрабатывает все (вроде как) возможные виды аргументов

0.1.3 - по большей части работает, но возможно еще нужно что-то починить

- в одном из 5 случаев(???) может сработать автокомплит функции
- <s>обнаружен способ вставлять сниппеты без undo(!!!)</s>

0.1.4 - шаблон для автокомплита функций

- обнаружен (работающий) способ вставлять сниппеты без undo(!!!)
- сделать чтобы при андо расскрытия докстринги оно по человечески раскрывалось
- переписал сепаратор стринги сниппетом, но так отступ нужно поправить
- заменил реплейс в ассисте дефов новой вставкой сниппета

0.1.5

- тройная строка раскрывается с дополнительным переносом
- докстринга разворачивается только если она первая в теле функции 
- переписан импорт триситтера таким образом чтобы в `TypeAssistService`, `parser` и `tree` были с типами `TreeSitter` и `TreeSitter.Tree | null` вместо `Any`

0.1.6

- переписаны `interface Context` с типами `TreeSitter` и `TreeSitter.Tree | null` вместо `Any`
- дерево теперь не может быть нуллом, решена проблема с асинхронным конструктором
- ассист функций для проверки где он обрезает весь документ с конца строки, что позволяет лучше определять что мы пишем скобки. Благодаря этому автокомплит функций работает вроде как без проблем
- есть проверка что мы в пу файле, по идее ассист теперь может тригириться только внутри питоновских файлов
- self не дописывается если последний декоратор - `@staticmethod`

0.1.7 - прогресс по комплиту функций

- метод `checkDecoratorAndClassContext` для проверки контекста, интерфейс позволяет легко расширяться, если я захочу добавить определенное поведение для `@property` и тп
- селф не записывается в параметры докстроки
- тип ретерна вписывается в докстроку
- вынес создание сниппета для докстроки

0.1.8 - микрофиксы докстроки + крутые свитчи в `FunctionCompleter`


Что дальше
----

- кастомное условие для разных декораторов (см propsd в пайчарме)

- если внутри строки быстро нажимать кнопки с ентрами то все ломается, в пайчарме все норм
- поправить отступы при сниппетном переносе строк 
- ctrl+enter ломает строки, и возможно что-то еще, надо разобраться, скорее всего доп проверку поставить

- def def() тригерит ассист, дерево думает что второй деф это identifier

- сделать разные стандарты док стринги
- включение-выключение умных курсоров при раскрытии докстринги (в пайчарме вроде их вообще нету)

- энтр в строке после ретерна должен оборачивать строку в скобки (тоже самое в чем-то по типу `some = "some string"`, наверняка есть какая-нибудь нода-оператор)
- корректно обрабатывать ентры после \\ в любых строках
- сделать юнит тесты
