angular.module('filter', [])

    .filter('startsWith', function () {

        return function (input, start, setCaseSensitive) {

            var sensitive = setCaseSensitive || false;

            if (!angular.isString(input) || angular.isUndefined(start)) {

                return input;

            }

            input = (sensitive) ? input : input.toLowerCase();

            return !input.indexOf((sensitive) ? start : start.toLowerCase());

        }

    });