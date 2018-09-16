angular.module('filter', [])

    .filter('isArray', function () {
        
        return function (input) {

            return angular.isArray(input);

        }

    });