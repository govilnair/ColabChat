/**
 * 
 */
var ColabChatFrontend = angular.module("ColabChatFrontend", [ 'ngRoute' ]);

var BASE_URL = "http://localhost:8080/ColabChatBackend/"

	ColabChatFrontend.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl : 'home.html',
		controller : 'HomeController'
	})
	.when('/blog', {
		templateUrl : 'col_blog/blog.html',
		controller : 'BlogController'
	}).when('/blog/:otheremail', {
		templateUrl : 'col_blog/blog.html',
		controller : 'BlogController'
	}).when('/create_blog', {
		templateUrl : 'col_blog/create_blog.html',
		controller : 'BlogController'
	}).when('/create_forum', {
		templateUrl : 'col_forum/create_forum.html',
		controller : 'ForumController'
	}).when('/list_forum/:otheremail', {
		templateUrl : 'col_forum/list_forum.html',
		controller : 'ForumController'
	}).when('/list_forum', {
		templateUrl : 'col_forum/list_forum.html',
		controller : 'ForumController'
	}).when('/home', {
		templateUrl : 'home.html',
		controller : 'HomeController'
	}).when('/job', {
		templateUrl : 'col_job/job.html',
		controller : 'JobController'
	}).when('/list_job', {
		templateUrl : 'col_job/list_job.html',
		controller : 'JobController'
	}).when('/chats', {
		templateUrl : 'chats.html',
		controller : 'ChatController'
	})
	.when('/friends', {
		templateUrl : 'friends.html',
		controller : 'FriendsController'
	})


});


ColabChatFrontend.service('dataService', function() {

	  // private variable
	  var _dataObj = {};

	  // public API
	  this.dataObj = _dataObj;
	});

ColabChatFrontend
		.controller(
				"NavigationController",
				[
						'$scope',					
						'$http',
						'$window',
						'$location',
						'dataService',
						'$rootScope',

						function($scope, 
								$http,  $window, $location, dataService, $rootScope
							) {

							console.log('Navigation Controller');

							console.log( $window.sessionStorage.getItem("currentUser") );


							if( $window.sessionStorage.getItem("currentUser") != null && $window.sessionStorage.getItem("currentUser") != undefined )
							{
								$rootScope.LogonEmail = JSON.parse( $window.sessionStorage.getItem("currentUser") ).email;
								$rootScope.LogonRole = JSON.parse( $window.sessionStorage.getItem("currentUser") ).role;
								
								$rootScope.LoginStats = true;
								
							}
							
							else
							{
								window.setTimeout(function(){
									$("#logonMod").modal('show');
								},1000);
								$rootScope.LoginStats = false;
							}
							
							
							$scope.logout = function() {
								$window.sessionStorage.clear();
								$rootScope.LoginStats = false;
								$location.path('/home');

							}

						} 
							]);
