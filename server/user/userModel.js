var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SALT_WORK_FACTOR = 10;
var bcrypt = require('bcryptjs');

var userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.pre('save', function(next) {
	var user = this;
  user.password = bcrypt.hashSync(user.password, SALT_WORK_FACTOR);
  next();
});
//insert userSchema.pre

module.exports = mongoose.model('User', userSchema);

