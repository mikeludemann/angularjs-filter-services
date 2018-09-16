angular.module('filter', [])

    .filter('trunc', function () {
        
        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.trunc(convert);

        }

    });