angular.module('filter', [])

    .filter('euler', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.exp(convert);

        }

    });