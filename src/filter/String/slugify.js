angular.module('filter', [])

    .filter('slugify', function () {

        return function (input, replaceElement) {

            var replace = (angular.isUndefined(replaceElement)) ? '-' : replaceElement;

            return angular.isString(input) ? input.toLowerCase().replace(/\s+/g, replace) : input;

        }

    });