angular.module("essence").controller('loginCtrl', function ($scope, $location, usersApi) {
	
	$scope.loginNomeCtrl = "Formulário de Entrada";

	$scope.userNotExit = false;

	$scope.validateUser = function (login) {
		usersApi.loginUser(login).success(function (data) {
			delete $scope.login;
			$scope.loginForm.$setPristine();
			if (data.type.name === 'Administrador') {
				$location.path("/adminUser");
			}else{
				$location.path("/visitorUser");
			}
		}).error(function() {
			$scope.userNotExit = true;
			delete $scope.login;
			$scope.loginForm.$setPristine();
		});		

	};	




});

