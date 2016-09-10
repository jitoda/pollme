var Session = require('./sessionModel');
var sessionController = {};

sessionController.isLoggedIn = function(req, res, next) {
  Session.findOne({cookieId: req.cookies.ssid}, function(err, session) {
  	if(err || session === null){
      res.redirect('/signup');
    } else {
  		next();
  	}
  });
};

sessionController.startSession = function(req, res, next) {
  var session1 = new Session({cookieId: res.id});
  session1.save(function(err){
  	if(err){
  			console.log("THERE WAS AN ERROR IN SESSION");
  	} else {
      // res.redirect('/secret');
      console.log("Starting session");
      next();
  	}  	
  })
};

module.exports = sessionController;
