angular.module('filter', [])

    .filter('repeat', [function () {

        return function (input, counter, separator) {

            var counts = ~~counter;

            if (!angular.isString(input)) {

                return input;

            }

            return !counts ? input : repeatInput(input, --counter, separator || '');

        }

    }]);

// Helper functions

function repeatInput(input, counter, separator) {

    if (!counter) {

        return input;

    }

    return input + separator + repeatInput(input, --counter, separator);

}