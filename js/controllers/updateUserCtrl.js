app.controller('updateUserCtrl', function($scope, $location, $http, usersApi, idGenerator) {

	$scope.listUsersNameCtrl = "Lista de Usuários";
	$scope.updateUsersNameCtrl = "Editar Usuário";


	$scope.users = [];
	$scope.user = [];
	$scope.types = [];

	var loadUsers = function () {
		usersApi.getUsers().success(function (data) {
			$scope.users = data;
		});
	};

	var loadUser = function () {
		usersApi.getUser($scope.idUserSelected).success(function (data) {
			$scope.user = data;
		});
	};

	var loadTypes = function () {
		usersApi.getTypes().success(function (data) {
			$scope.types = data;
		});
	};

	$scope.reloadUpdateUser = function () {
		loadUser();
		$scope.updateUserForm.$setPristine();
		$location.path("/updateUser");
	};

	var userIdUpdate = $scope.idUserSelected;

	$scope.updateUser = function (user) {
		user.idUser = $scope.user.idUser;
		user.creationDate= $scope.user.creationDate;
		user.modifyDate= new Date();
		usersApi.updateUser($scope.idUserSelected, user).success(function (data) {
			$scope.updateUserForm.$setPristine();
			loadUsers();
			$location.path("/listUsers");
		});
	};

	loadUsers();
	loadUser();
	loadTypes();

});