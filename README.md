# webpack-boilerplate

Шаблон для сборки проектов на webpack.js. Данная сборка включает в себя "react.js", по большей части я работаю с данной библиотекой. Для ее установки нужно будет зайти в корень проекта и набрать в консоли "npm install". Данная сборка поддерживает подключение 'less', 'sass', 'css' файлов. После установки будет доступно 3 команды:

- "npm run build_extract" - это первая команда которую стоит запустить. После данной команды в корне проекта появится папка "public", произойдет сборка JS. Если собранный файл будет больше 200 кб он будет разбит на чанки, в противном случае этого не произойдет. Также из готового JS-файла будут изъяты CSS-ки и будет сгенерен HTML-файл из './templates/index.twig'.

- "npm run dev" - после данной команды будет запущен локальный сервер по адресу "http://localhost:8080/". Просматривать он будет папку "public", поэтому ее нужно будет сгенерить первой командой.

- "npm run build" - после данной команды произойдет сборка JS. Если собранный файл будет больше 200 кб он будет разбит на чанки, в противном случае этого не произойдет. CSS не будет изъят, если стилей не очень много, то так можно сделать