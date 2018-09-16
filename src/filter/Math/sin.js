angular.module('filter', [])

    .filter('sin', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.sin(convert * Math.PI / 180);

        }

    });