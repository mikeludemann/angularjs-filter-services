angular.module('filter', [])

    .filter('isUndefined', function () {
        
        return function (input) {

            return angular.isUndefined(input);

        }

    });