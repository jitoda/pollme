const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./user/userController');
const pollController = require('./poll/pollController');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected!!');
});

//static serving html, css, js scrips
app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({ extended: true }));


//all routes tested using postman
app.get('/', function(request, response) {
	response.statusCode(200);
	response.sendFile(__dirname + "/app/index.html");
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

app.get('/poll', pollController.getPoll, function(request, response) {
	request.body.id = request.query.id;
 	console.log("return is next");
return; 
});


app.post('/poll', pollController.createPoll, pollController.getPollId, function(request, response) {
//response.statusCode(200);
response.send("I AM SENDING A POLL");
});

//post request to login to verify user, get userid and end with JSON object and status code 200
app.post('/login', userController.verifyUser, userController.getUserId, function(request, response) {
	//response.statusCode(200);
	response.end({});
});

app.post('/signup', userController.createUser, userController.getUserId, function(request, response) {
	//response.statusCode(200);
	response.redirect('http://localhost:3000/#/app');
});

app.listen(4000);

module.exports = app;

