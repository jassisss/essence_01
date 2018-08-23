angular.module("essence").controller('loginCtrl', function ($scope, $location) {
	
	$scope.loginNomeCtrl = "Formulário de Entrada";

	$scope.validateUser = function (login) {
		delete $scope.login;
		$scope.loginForm.$setPristine();
		$location.path("/listUsers");

	};	
});

