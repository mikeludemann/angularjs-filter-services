angular.module('filter', [])

    .filter('hyperbolicTangant', function () {
        
        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.tanh(convert);

        }

    });