var express = require('express');

var mybuffer = require('buffer');
var fs = require('fs');

var app = express.createServer(express.logger());

mybuffer = fs.readFileSync('index.html')

app.get('/', function(request, response) {
  response.send(mybuffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
