angular.module('essence').controller('listUsersCtrl', function($scope, usersApi) {

	$scope.listUsersNameCtrl = "Lista de Usuários";

	$scope.users = [];

	var loadUsers = function () {
		usersApi.getUsers().success(function (data) {
			$scope.users = data;
		});
	};

	loadUsers();

});