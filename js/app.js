var app = angular.module("essence",["ngMessages", "ngRoute", "ngMaterial"]);

	app.run(function($rootScope) {
	    $rootScope.idUserSelected = 0;
		$rootScope.changeIdUserSelected = function(id) {
			$rootScope.idUserSelected = id;
  		};

	});
	

