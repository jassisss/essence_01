app.provider('idGenerator', function(){

	this.$get = function () {
		return {
			generate: function (id) {
				var ids = id.map(function (element) {
					return element.idUser;
				});
				
				var idsSort = ids.sort( function(a,b) {
					return b - a;
				});

				newId = idsSort[0] + 1;

				return 	newId ;		
			
			}
		};

	};

});