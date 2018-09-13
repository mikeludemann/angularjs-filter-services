angular.module('filter', [])

    .filter('leftTrim', function () {

        return function (input, character) {

            var trim = character || '\\s';

            return angular.isString(input) ? input.replace(new RegExp('^' + trim + '+'), '') : input;

        }

    });