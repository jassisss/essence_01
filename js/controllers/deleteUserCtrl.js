app.controller('deleteUserCtrl', function($scope, $location, usersApi) {

	$scope.listUsersNameCtrl = "Lista de Usuários";
	$scope.deleteUsersNameCtrl = "Excluir Usuário";


	$scope.user = [];

	var loadUser = function () {
		usersApi.getUser($scope.idUserSelected).success(function (data) {
			$scope.user = data;
		});
	};

	$scope.deleteUser = function () {
		usersApi.deleteUser($scope.idUserSelected).success(function (data) {
			$location.path("/listUsers");
		});
	};

	loadUser();

});