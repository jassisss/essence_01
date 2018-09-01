angular.module("essence").controller('registerCtrl', function ($scope) {

	$scope.registerNomeCtrl = "Formulário de Registro";

	$scope.resetRegisterForm = function () {
		delete $scope.register;
		$scope.registerForm.$setPristine();

	};
});
