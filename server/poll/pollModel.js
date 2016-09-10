var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pollSchema = new Schema({
  created_by: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  poll_title: { type: String, required: true },
  choices: Schema.Types.Mixed,
});

module.exports = mongoose.model('Poll', pollSchema);

