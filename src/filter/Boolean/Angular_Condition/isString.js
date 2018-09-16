angular.module('filter', [])

    .filter('isString', function () {

        return function (input) {

            return angular.isString(input);

        }

    });