var https = require('https');
var fs = require('fs');

var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));





app.get('/', function(req, res) {
  res.render("index");
})

var sslOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'testserveurhttps'
};

https.createServer(sslOptions, app).listen(443);