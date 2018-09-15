angular.module('filter', [])

    .filter('match', function () {

        return function (input, pattern, matching) {

            var regexp = new RegExp(pattern, matching);

            return angular.isString(input) ? input.match(regexp) : null;

        }

    });