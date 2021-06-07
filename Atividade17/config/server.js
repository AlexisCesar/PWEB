var express = require('express');

var app = express(); // executando o express

var path = require('path')

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join('./', 'public')));

module.exports = app;