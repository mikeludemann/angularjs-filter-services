angular.module('filter', [])

    .filter('cosine', function () {

        return function (input) {

            var convert = angular.isString(input) ? Number(input) : input;

            return Math.cos(convert * Math.PI / 180);

        }

    });