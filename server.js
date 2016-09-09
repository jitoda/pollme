var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');


//static serving html, css, js scrips
app.use(express.static(__dirname + '/app'));

//all routes tested using postman
app.get('/test', function(request, response) {
	response.set({
  	'Content-Type': 'text/html, charset=utf-8',
	});
	response.status(200);
	response.sendFile(__dirname + '/test.html');
});

app.get('/', function(request, response) {
response.send("HI I AM GETTING / HERE");
});

app.post('/', function(request, response) {
response.send("HI I AM POSTING IN / HERE");
});

app.get('/home', function(request, response) {
response.send("HI I AM GETTING IN HOME");
});

app.post('/create', function(request, response) {
response.send("HI I AM POSTING CREATE");

});

app.get('/poll', function(request, response) {
response.send("HI I AM GETTING POLL");

});

app.post('/poll', function(request, response) {
response.send("I AM POSTING POLL");

});

app.listen(3000);

module.exports = app;