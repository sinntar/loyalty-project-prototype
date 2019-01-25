var express = require('express');
var app = express();


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
app.use("/app", express.static(__dirname + '/app'));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));

var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});