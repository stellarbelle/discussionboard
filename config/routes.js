var users = require('../server/controllers/users.js');
var posts = require('../server/controllers/posts.js');

module.exports = function(app) {

	app.post('/create_user', function(req, res) {
		users.add(req, res);
	})
	app.post('/create_post', function(req, res) {
		posts.add(req, res);
	})
	app.get('/get_posts', function(req, res) {
		posts.show(req, res);
	})
	app.post('/get_user', function(req, res) {
		users.show(req, res);
	})
}
