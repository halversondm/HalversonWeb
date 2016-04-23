/*
Main production server configuration using NodeJS and ExpressJS
 */
'use strict';
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = 80;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('common'));
app.use(express.static(__dirname));
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/abc.php', function response(req, res) {
    console.log(req.body);
    res.send('ABC Saved!');
});

app.post('/mail.php', function response(req, res) {
    console.log(req.body);
    res.send('Email Success!');
});

app.listen(port);
console.info('==> Listening on port %s.', port);
