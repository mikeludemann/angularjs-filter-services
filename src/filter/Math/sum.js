angular.module('filter', [])

    .filter('sum', function () {
        
        return function (input, defaultValue) {

            var convert = angular.isString(defaultValue) ? Number(defaultValue) : defaultValue;

            return !angular.isArray(input) ? input : input.reduce(function (previous, current) {

                return previous + current;

            }, convert || 0);

        }

    });