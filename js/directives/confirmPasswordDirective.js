app.directive("confirmPassword", function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elm, attr, ctrl) {
			elm.bind("keyup", function () {
				console.log(ctrl.$viewValue);
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();
			});

			// elm.bind("keyup", function () {
		 //   		console.log('scope: ' + scope + ' elm: ' + elm + ' attr: ' + attr + ' ctrl: ' + ctrl); 	
			// });
      // if (!ctrl) return;
      // attr.required = true; // force truthy in case we are on non input element


      // ctrl.$validators.required = function(modelValue, viewValue) {
      //   return !attr.required || !ctrl.$isEmpty(viewValue);
      // };

      // attr.$observe('required', function() {
      //   ctrl.$validate();
      // });
    }
  };
});	

//   return 


//   {
// 		restrict: "A"
// 		require: "ngModel",
// 		link: function (scope, element, attrs, ctrl) {
// 			var _formatDate = function (date) {
// 				if (!date) return date;
// 				date = date.replace(/[^0-9]+/g, "");
// 				if(date.length > 2) {
// 					date = date.substring(0,2) + "/" + date.substring(2);
// 				}
// 				if(date.length > 5) {
// 					date = date.substring(0,5) + "/" + date.substring(5,9);
// 				}
// 				return date;
// 			};

// 			element.bind("keyup", function () {
// 				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
// 				ctrl.$render();
// 			});

// 			ctrl.$parsers.push(function (value) {
// 				if (value.length === 10) {
// 					var dateArray = value.split("/");
// 					return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
// 				}
// 			});

// 			ctrl.$formatters.push(function (value) {
// 				return $filter("date")(value, "dd/MM/yyyy");
// 			});
// 		}
// 	};
// });