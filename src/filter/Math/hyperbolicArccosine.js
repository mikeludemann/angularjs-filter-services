angular.module('filter', [])

    .filter('hyperbolicArccosine', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.acosh(convert);

        }

    });