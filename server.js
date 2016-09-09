var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected!!');

	var User = mongoose.model('User', userSchema);

	var test = new User({ username: 'test', password: 'test' });
	console.log(test.username);
});

// write your code here
// serve the this.html page when /this is visited
// serve the that.html page when /that is visited
// DO NOT USE express.static

app.get('/', function(request, response) {
	response.set({
  	'Content-Type': 'text/html, charset=utf-8',
	});
	response.status(200);
	response.sendFile(__dirname + '/test.html');
});

app.listen(3000);

module.exports = app;