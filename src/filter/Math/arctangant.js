angular.module('filter', [])

    .filter('arctangant', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.atan(convert);

        }

    });