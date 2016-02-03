var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/login.html'})
	.when('/board', {templateUrl: 'partials/board.html'})
	.when('/user/:id', {templateUrl: 'partials/user.html'})
	.otherwise({redirectTo: '/'})
});


myApp.factory('usersFactory', function($http) {
	var factory = {};

	factory.createUser = function(info, callback) {
		$http.post('/create_user', info).success(function(output) {
			callback(output);
		})
	};

	return factory;
});

myApp.factory('postsFactory', function($http) {
	var factory = {};

	factory.newPost = function(post, callback) {
		$http.post('/create_post', post).success(function(output) {
				callback(output);
		})
	};

	factory.getPosts = function(callback) {
		$http.get('/get_posts').success(function(output) {
			callback(output);
		})
	};

	factory.getUser = function(id, callback) {
		user_id = {"id": id}
		$http.post('/get_user', user_id).success(function(output) {
			callback(output);
		})
	}

	return factory;
});

myApp.controller('usersController', function($scope, $location, $rootScope, usersFactory) {

	$scope.newUser = function() {
		user_repack = {
					   name: $scope.userName,
					   created_at: new Date()
					  }
		usersFactory.createUser(user_repack, function(data) {
			$rootScope.user = data;
			$location.path('/board')
		});
	}

});

myApp.controller('postsController', function($scope, $location, $rootScope, postsFactory) {

	postsFactory.getPosts(function(data) {
		$scope.posts = data;
	});

	$scope.addPost = function(user) {
		post_repack = {
			title: $scope.post.title,
			description: $scope.post.description,
			category: $scope.post.category,
			created_at: new Date(),
			user_name: user.name,
			user_id: user._id
		}
		postsFactory.newPost(post_repack, function(data) {
			$scope.posts = data;
		});
	};

});

myApp.controller('showUserController', function($scope, $rootScope, $routeParams, postsFactory) {

	postsFactory.getUser($routeParams.id, function(data) {
		console.log(data)
		$rootScope.showUser = data;
	});

})
