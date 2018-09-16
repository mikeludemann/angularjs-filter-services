angular.module('filter', [])

    .filter('arcsine', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.asin(convert);

        }

    });