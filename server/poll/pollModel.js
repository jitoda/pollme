var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pollSchema = new Schema({
  poll_id: { type: String, required: true, unique: true },
  created_by: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  poll_title: { type: String, required: true },
  choices: Schema.Types.Mixed,
});

module.exports = mongoose.model('Poll', pollSchema);

