angular.module('filter', [])

    .filter('rightTrim', function () {

        return function (input, character) {

            var trim = character || '\\s';

            return angular.isString(input) ? input.replace(new RegExp(trim + '+$'), '') : input;

        }

    });