angular.module('filter', [])

    .filter('hyperbolicCosine', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.cosh(convert);

        }

    });