angular.module('essence').controller('listUsersCtrl', function($scope) {

	$scope.listUsersNameCtrl = "Lista de Usuários";
	$scope.addUsersNameCtrl = "Adicionar Usuário";

	$scope.users = [
	  {id: 1, name: "José de Assis", email: "jassis@ibist.org.br", password: "123456", type: "Administrador", creationData: "2018-08-22T03:00:00Z", modifyDate: new Date()},
	  {id: 1, name: "Bruno Guimarães", email: "bruno@gmail.com", password: "123456", type: "Visitante", creationData: "2018-08-22T03:00:00Z", modifyDate: new Date()},
	  {id: 1, name: "Carlos Santos", email: "carlos@gmail.com", password: "123456", type: "Visitante", creationData: "2018-08-22T03:00:00Z", modifyDate: new Date()},
	  {id: 1, name: "Maria Clara Alves", email: "maria.clara@gmail.com", password: "123456", type: "Visitante", creationData: "2018-08-22T03:00:00Z", modifyDate: new Date()},
	  {id: 1, name: "Cláudia Gomes Martins", email: "cmcacau@gmail.com", password: "123456", type: "Administrador", creationData: "2018-08-22T03:00:00Z", modifyDate: new Date()},
  	];

  	$scope.types = [
		{name: "Administrador", codigo: 1},
		{name: "Visitante", codigo: 2},
	];
	
});