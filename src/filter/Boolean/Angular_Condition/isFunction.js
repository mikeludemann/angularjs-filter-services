angular.module('filter', [])

    .filter('isFunction', function () {
        
        return function (input) {

            return angular.isFunction(input);

        }

    });