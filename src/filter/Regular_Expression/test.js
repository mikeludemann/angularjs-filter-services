angular.module('filter', [])

    .filter('test', function () {

        return function (input, pattern, matching) {

            var regexp = new RegExp(pattern, matching);

            return angular.isString(input) ? regexp.test(input) : input;

        }

    });