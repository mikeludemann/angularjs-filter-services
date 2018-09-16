angular.module('filter', [])

    .filter('cubicRoot', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.cbrt(convert);

        }

    });