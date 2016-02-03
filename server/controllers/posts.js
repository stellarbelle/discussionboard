var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = (function() {
	return {
		add: function(req, res) {
			var new_post = Post(req.body);
			new_post.save(function(err, post) {
				if(err) {
					console.log('Error', err)
				} else {
					res.redirect('/get_posts')
				}
			})
		},
		show: function(req, res) {
			Post.find({}, function(err, posts) {
				if(err) {
					console.log("Error", err)
				} else {
					res.json(posts)
				}
			})
		}
	}
})();
