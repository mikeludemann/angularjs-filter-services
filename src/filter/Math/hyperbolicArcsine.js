angular.module('filter', [])

    .filter('hyperbolicArcsine', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.asinh(convert);

        }

    });