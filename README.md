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

Что дальше
----

- сделать ассист для док стринги
- сделать юнит тесты
- корректно обрабатывать ентры после \\ в любых строках
- сделать проверку что мы в пу файле, сейчас ассист работает во всех, например в .txt


- #### удобно добавлять другие фичи

