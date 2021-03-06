var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var controllers = require('./controllers');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'public','img','favicon.ico')));
app.use(controllers);

module.exports = app;