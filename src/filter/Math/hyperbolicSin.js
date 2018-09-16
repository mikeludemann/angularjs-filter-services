angular.module('filter', [])

    .filter('hyperbolicSin', function () {
        
        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.sinh(convert);

        }

    });