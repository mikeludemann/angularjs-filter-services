angular.module('filter', [])

    .filter('wrap', function () {

        return function (input, wrapping, ending) {

            return angular.isString(input) && angular.isDefined(wrapping) ? [wrapping, input, ending || wrapping].join('') : input;

        }

    });