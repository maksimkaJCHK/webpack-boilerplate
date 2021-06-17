# webpack-boilerplate

Шаблон для сборки проектов на webpack.js. Данная сборка включает в себя "react.js", по большей части я работаю с данной библиотекой. Для ее установки нужно будет зайти в корень проекта и набрать в консоли "npm install". Данная сборка поддерживает IE 11 (если нужно) и подключение 'less', 'sass' файлов. После установки будет доступно 3 команды:

- "npm run dev" - после данной команды будет запущен локальный сервер по адресу "http://localhost:8080/".

- "npm run build" - после данной команды произойдет сборка JS. Если собранный файл будет больше 200 кб он будет разбит на чанки, в противном случае этого не произойдет.

- "npm run buildextract" - после данной команды произойдет сборка JS. Если собранный файл будет больше 200 кб он будет разбит на чанки, в противном случае этого не произойдет. Также из готового JS-файла будут изъяты CSS-ки и будет сгенерен HTML-файл из './templates/index.twig'. Я пользуюсь twig-шаблонизатором. Вообще эта команда нужна когда я пишу виджеты, или плагины для react.js. Так особо-то она не нужна.