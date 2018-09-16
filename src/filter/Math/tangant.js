angular.module('filter', [])

    .filter('tangant', function () {
        
        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.tan(convert);

        }

    });