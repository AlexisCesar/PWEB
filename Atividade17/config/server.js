var express = require('express');

var consign = require('consign');

var bodyParser = require('body-parser');

var app = express(); // executando o express

var path = require('path')

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join('./', 'public')));

consign({ cwd: './'})
	.include('routes')
	.into(app);

module.exports = app;