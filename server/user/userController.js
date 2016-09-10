var User = require('./userModel');
// var cookieController = require('./../util/cookieController');
// var sessionController = require('./../session/sessionController');
var bcrypt = require('bcrypt');

var userController = {
	getAllUsers: function(next){
		User.find({}, next);
	},
	verifyUser: function(req, res, next){
		User.findOne({username: req.body.username}, function(err, user){
			if(user === null){
				console.log("USER DOESNT EXIST");
				res.redirect('http://localhost:3000/');

			} else if (bcrypt.compareSync(req.body.password, user.password)){
				next();
			} else {
				console.log("USER NOT FOUND");
				// res.redirect('/signup');
			}
		})	
	},
	getUserId: function(req, res, next) {
		//possibe funciton not needed 
		User.find({username: req.body.username}, function(err, user){
			if(err) throw err; 
			res.id = user[0].id;
			console.log("WE have created an ID", res.id, "user[0]", user[0]); 
			next(); 
		})
	}
}

userController.createUser = function(req, res, next) {
	if (req.body.username && req.body.password){
  	var user = new User(req.body);
  	user.save(function(err){
  		if(err){
  			return err;
  		} else {
  			next();
  		}
  	})
  } else {
  	console.log("Username && password didn't pass");
  }
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*
* @param req - http.IncomingRequest
* @param rs - http.ServerResponse
**/

module.exports = userController;
