
var sessionController = require('./../session/sessionController');
var getIdController = require('./../user/userController');

var cookieController = {};
cookieController.setCookie = setCookie;
cookieController.setSSIDCookie = setSSIDCookie;

function setCookie(req, res, next) {
  res.cookie('Jitoda', 'hi', {maxAge: 1000000});
  res.cookie('secret', Math.floor((Math.random() * 99) + 1), {maxAge: 100000});
  next();
}

function setSSIDCookie(req, res, next) {
	console.log("RES", res);
	//httpOnly set to false in order to grab id in react using react-cookie
	res.cookie('ssid', res.id, {maxAge: 1000000, httpOnly: false});
	next();
}

module.exports = cookieController;
