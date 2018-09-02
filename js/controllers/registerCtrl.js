app.controller('registerCtrl', function ($scope, $location, idGenerator, users, usersApi) {

	$scope.registerNomeCtrl = "Formulário de Registro";

	$scope.registerPasswordChanged = function () {

		if ($scope.register.password !== $scope.newRegisterPassword) {
			$scope.newRegisterPassword = '';
		};

	};


	$scope.users = users.data;
	$scope.confirmPassword = '';
	$scope.userExit = false;
	$scope.login = [];

	$scope.resetRegisterForm = function () {
		delete $scope.register;
		$scope.registerForm.$setPristine();

	};

	$scope.registerPasswordChanged = function () {

		if ($scope.register.password !== $scope.confirmPassword) {
			$scope.confirmPassword = '';
		};

	};

	$scope.registerUser = function (user) {
		user.idUser = idGenerator.generate($scope.users);
		user.creationDate= new Date();
		user.modifyDate= new Date();
		user.type = {'idType': 2, name: 'Visitante'};
		usersApi.saveUser(user).success(function (data) {
			delete $scope.user;
			$scope.registerForm.$setPristine();
			$scope.login.email = user.email;
			$scope.login.password = '';
			$location.path("/login");
		}).error(function() {
			$scope.userExit = true;
			delete $scope.user;
			$scope.confirmPassword = '';
			$scope.registerForm.$setPristine();
		});
	};

});
