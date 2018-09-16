angular.module('filter', [])

    .filter('arccosine', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.acos(convert);

        }

    });