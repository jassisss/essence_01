angular.module("essence").config(function ($routeProvider) {

	$routeProvider.when("/login", {
		templateUrl: "view/loginView.html",
		controller: "loginCtrl",
	});
	
	$routeProvider.when("/register", {
		templateUrl: "view/registerView.html",
		controller: "registerCtrl",
	});
	
	$routeProvider.when("/forgot", {
		templateUrl: "view/forgotView.html",
		controller: "forgotCtrl",
	});

	$routeProvider.when("/listUsers", {
		templateUrl: "view/listUsersView.html",
		controller: "listUsersCtrl",
	});

	$routeProvider.when("/addUser", {
		templateUrl: "view/addUserView.html",
		controller: "addUserCtrl",
	});

	$routeProvider.when("/deleteUser", {
		templateUrl: "view/deleteUserModalView.html",
		controller: "deleteUserCtrl",
	});

	$routeProvider.when("/updateUser", {
		templateUrl: "view/updateUserView.html",
		controller: "updateUserCtrl",
	});

	$routeProvider.otherwise({redirectTo: "/login"});

});