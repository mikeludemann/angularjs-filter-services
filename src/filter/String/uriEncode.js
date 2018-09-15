angular.module('filter', [])

    .filter('uriEncode', ['$window', function ($window) {

        return function (input) {

            return angular.isString(input) ? $window.encodeURI(input) : input;

        }

    }]);