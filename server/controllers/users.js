var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		add: function(req, res) {
			var new_user = User(req.body);
			new_user.save(function(err, user) {
				if(err) {
					console.log('Error', err)
				} else {
					res.json(user)
				}
			})
		},
		show: function(req, res) {
			console.log("id", req.body.id)
			User.find({_id: req.body.id}, function(err, data) {
				if(err) {
					console.log('Error', err)
				} else {
					res.json(data)
				}
			})
		}
	}
})();
