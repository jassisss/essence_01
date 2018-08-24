angular.module('essence').factory('usersApi', function($http, config) {

	var _getUsers = function() {
		return $http.get(config.baseUrl + "/users");		
	};

	var _saveUser = function(user) {
		return $http.post(config.baseUrl + "/users", user);		
	};

	var _getTypes = function() {
		return $http.get(config.baseUrl + "/types");		
	};

	return {
		getUsers: _getUsers,
		saveUser: _saveUser,
		getTypes: _getTypes,
	};	

});