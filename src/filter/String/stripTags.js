angular.module('filter', [])

    .filter('stripTags', function () {

        return function (input) {

            return angular.isString(input) ? input.replace(/<\S[^><]*>/g, '') : input;

        }

    });