var express = require('express');
var app = express();
var io = require('socket.io');

app.get('/', function(req, res) {
  res.send('\'Sup Universe');
});



app.listen(3000);
