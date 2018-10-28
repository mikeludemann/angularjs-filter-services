angular.module('filter', [])

    .filter('join', function () {

        return function (input, delimiter) {

            if (angular.isUndefined(input) || !angular.isArray(input)) {

                return input;

            }

            if (angular.isUndefined(delimiter)) {

                delimiter = ' ';

            }

            return input.join(delimiter);

        };

    });