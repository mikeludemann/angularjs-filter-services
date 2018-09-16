angular.module('filter', [])

    .filter('isNumber', function () {
        
        return function (input) {

            return angular.isNumber(input);

        }

    });