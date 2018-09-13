angular.module('filter', [])

    .filter('lowercasefirst', [function () {

        return function (input) {

            return angular.isString(input) ? input.split(' ').map(function (ch) { return ch.charAt(0).toLowerCase() + ch.substring(1); }).join(' ') : input;

        }

    }]);