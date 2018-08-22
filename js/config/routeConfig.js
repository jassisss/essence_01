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

	$routeProvider.otherwise({redirectTo: "/login"});

});