app.controller('listUsersCtrl', function($scope, usersApi, $location) {

	$scope.listUsersNameCtrl = "Lista de Usuários";

	$scope.users = [];

	$scope.mostra = false;

	var loadUsers = function () {
		usersApi.getUsers().success(function (data) {
			$scope.users = data;
		});
	};


	$scope.reloadUser = function() {
		$scope.mostra = false;
		loadUsers();
		$location.path("/listUsers");
	};

	$scope.pegar = function(data) {
        $scope.mostra = true;
        $scope.changeIdUserSelected(data.idUser);
    }

	loadUsers();

});