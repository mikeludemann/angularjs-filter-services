angular.module('filter', [])

    .filter('isObject', function () {
        
        return function (input) {

            return angular.isObject(input);

        }

    });