var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: String,
	description: String,
	category: String,
	created_at: String,
	user_name: String,
	user_id: String
});

mongoose.model('Post', PostSchema);
