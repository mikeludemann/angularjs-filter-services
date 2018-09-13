angular.module('filter', [])

    .filter('endsWith', function () {

        return function (input, end, setCaseSensitive) {

            var sensitive = setCaseSensitive || false,
                getPosition;

            if (!angular.isString(input) || angular.isUndefined(end)) {

                return input;

            }

            input = (sensitive) ? input : input.toLowerCase();
            getPosition = input.length - end.length;

            return input.indexOf((sensitive) ? end : end.toLowerCase(), position) !== -1;

        }

    });