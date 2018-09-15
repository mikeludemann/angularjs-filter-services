angular.module('filter', [])

    .filter('root', function () {
        
        return function (input) {

            return Math.sqrt(input);

        }

    });