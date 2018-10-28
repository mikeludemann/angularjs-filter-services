angular.module('filter', [])

    .filter('reverse', [function () {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (input) {

            input = angular.isObject(input) ? convertToArray(input) : input;

            if (angular.isString(input)) {

                return input.split('').reverse().join('');

            }

            return angular.isArray(input) ? input.slice().reverse() : input;

        }

    }]);