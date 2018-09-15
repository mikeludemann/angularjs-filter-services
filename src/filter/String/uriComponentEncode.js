angular.module('filter', [])

    .filter('uriComponentEncode', ['$window', function ($window) {

        return function (input) {

            return angular.isString(input) ? $window.encodeURIComponent(input) : input;

        }

    }]);