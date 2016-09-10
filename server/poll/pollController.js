var Poll = require('./pollModel');

var pollController = {
	getAllPolls: function(next){
		Poll.find({}, next);
	},
	verifyPoll: function(req, res, next){
		Poll.findOne({username: req.body.username}, function(err, user){
			if(user === null){
				console.log("USER DOESNT EXIST");
				// res.redirect('/signup');
			} else if (bcrypt.compareSync(req.body.password, user.password)){
				next();
			} else {
				console.log("USER NOT FOUND");
				// res.redirect('/signup');
			}
		})	
	},

	getPoll: function(req, res, next) {
		Poll.findOne({id: req.body.id}, function(err, poll) {
			if(err) throw err;
			//res.send(poll);
			console.log("THIS IS THE POLL IN CONTROLLER", poll);
			res.send(poll);
			next();
		})
	},
	getPollId: function(req, res, next) {
		//possibe funciton not needed 
		Poll.find({poll_title: req.body.poll_title}, function(err, poll){
			if(err) throw err; 
			res.id = poll[0].id;
			next(); 
		})
	}
}

pollController.createPoll = function(req, res, next) {
	// console.log("request.body in createPoll", req);
  if (req.body.poll_title){
  //	console.log("CREATING POLL");
  	var poll = new Poll(req.body);
  	poll.save(function(err){
  		if(err){
  			return err;
  		} else {
  			next();
  		}
  	})
  } else {
  	console.log("POLL DOESNT EXIST");
  }
};



module.exports = pollController;