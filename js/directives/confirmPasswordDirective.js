(function() {
    'use strict';

    app.directive("confirmPassword", confirmPassword);

    function confirmPassword($filter) {
        return {
            require: "ngModel",
            scope: {
                confirmPassword: '='
            },
            link: function (scope, element, attrs, ctrl) {
                var _formatInput = function (data) {
                	
                    return data;
                };

                element.bind("keyup", function () {
                    ctrl.$setViewValue(_formatInput(ctrl.$viewValue));
                    ctrl.$render();
                });

                ctrl.$parsers.push(function (value) {
                    if (value.length >= scope.confirmPassword.length) {
                        var isValid = (value === scope.confirmPassword);
                        return ctrl.$setValidity('confirm', isValid);;
                    }
                });

            }
        };
    }
})();
