(function () {
	'use strict';
	
	angular.module("essence").controller('appCtrl', appCtrl);

	function appCtrl ($scope) {
		$scope.ano = new Date();
	};	

})()
