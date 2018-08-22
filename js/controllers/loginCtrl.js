angular.module("essence").controller('loginCtrl', function ($scope) {
	$scope.loginNomeCtrl = "Formulário de Entrada";

	$scope.resetLoginForm = function (email) {
		delete $scope.login;
		$scope.loginForm.$setPristine();

	};	
});

