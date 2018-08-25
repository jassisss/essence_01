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
		delete $scope.user;
		$scope.addUserForm.$setPristine();
		$location.path("/addUser");
	};

	// console.log(idGenerator.generate($scope.users, 'idUser'));
	// console.log($scope.users, 'idUser');
	// console.log(loadUsers());

	$scope.updateUser = function (user) {
		user.idUser = $scope.user.idUser;
		user.creationDate= $scope.user.creationDate;
		user.modifyDate= new Date();
		usersApi.updateUser(user).success(function (data) {
			$scope.updateUserForm.$setPristine();
			loadUsers();
			$location.path("/listUsers");
		});
	};

	loadUsers();
	loadUser();
	loadTypes();

});