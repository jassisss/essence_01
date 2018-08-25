angular.module('essence').controller('addUserCtrl', function($scope, $location, $http, usersApi, idGenerator) {

	$scope.listUsersNameCtrl = "Lista de Usuários";
	$scope.addUsersNameCtrl = "Adicionar Usuário";


	$scope.users = [];
	$scope.types = [];

	var loadUsers = function () {
		usersApi.getUsers().success(function (data) {
			$scope.users = data;
		});
	};

	var loadTypes = function () {
		usersApi.getTypes().success(function (data) {
			$scope.types = data;
		});
	};

	$scope.reloadAddUser = function () {
		delete $scope.user;
		$scope.addUserForm.$setPristine();
		$location.path("/addUser");
	};

	// console.log(idGenerator.generate($scope.users, 'idUser'));
	// console.log($scope.users, 'idUser');
	// console.log(loadUsers());

	$scope.addUser = function (user) {
		user.idUser = idGenerator.generate($scope.users);
		user.creationDate= new Date();
		user.modifyDate= new Date();
		usersApi.saveUser(user).success(function (data) {
			delete $scope.user;
			$scope.addUserForm.$setPristine();
			loadUsers();
			$location.path("/listUsers");
		});
	};

	loadUsers();
	loadTypes();

});