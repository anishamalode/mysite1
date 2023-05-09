var express = require('express');
var fs = require('fs');
var path=require('path');
var app = express();

var ___dirname = path.resolve('./public')
//server configuration
app.use(express.static(path.join(__dirname,'Public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/home.html'));
 });


 app.use(express.static(path.join(__dirname,'Scripts')));

 app.get('/app', function (req, res) {
    res.sendFile(path.join(___dirname + '/app.js'));
 });

var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://localhost:8888", host, port)
});

  