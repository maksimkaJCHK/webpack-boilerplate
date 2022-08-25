# webpack-boilerplate

Шаблон для сборки проектов на webpack.js. Данная сборка включает в себя "react.js" и "redux-saga", по большей части я работаю с данными библиотеками. Для ее установки нужно будет зайти в корень проекта и набрать в консоли "npm install". Данная сборка поддерживает подключение 'less', 'sass' файлов. Если будет нужен локальный сервер, то нужно будет зайти в папку "test_server" и нажать там "npm install", ну если локальный сервер вам не нужен, то и делать этого не стоит. После установки будет доступно 4 команды:

- "npm run build_extract" - это первая команда которую стоит запустить. После данной команды в корне проекта появится папка "public", произойдет сборка JS. Если собранный файл будет больше 200 кб он будет разбит на чанки, в противном случае этого не произойдет. Также из готового JS-файла будут изъяты CSS-ки и будет сгенерен HTML-файл из './templates/index.twig'.

- "npm run dev" - после данной команды будет запущен локальный сервер по адресу "http://localhost:8080/". Просматривать он будет папку "public", поэтому ее нужно будет сгенерить первой командой.

- "npm run dev_server" - эта команда нужна для локальной разработки. После данной команды будет запущен локальный сервер по адресу "http://localhost:8080/". Также нужно будет зайти в папку "test_server" и набрать там "npm run serve", для запуска локального сервера. В процессе разработки я его часто использую. На странице "http://localhost:3000/" можно увидеть какие API я использую, в примере это http://localhost:3000/api/". Если вы будете использовать остальные команды, то запрос будет делаться на фейковый сервер с собачками, эта команда при запущенном локальном сервере будет грузить рисованных собачек, всего их 5. Настройки для запросов лежат в следующих файлах - ".env_dev", ".env_dev_test_server", ".env_prod". Как локальный сервак настраивать, смотрите в "./test_server/app.js", API делается по аналогии.

- "npm run build" - после данной команды произойдет сборка JS. Если собранный файл будет больше 200 кб он будет разбит на чанки, в противном случае этого не произойдет.