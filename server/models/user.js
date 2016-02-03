var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	created_at: String
});

mongoose.model('User', UserSchema);