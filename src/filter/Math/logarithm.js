angular.module('filter', [])

    .filter('logarithm', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.log(convert);

        }

    });