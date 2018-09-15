angular.module('filter', [])

    .filter('abs', function () {
        
        return function (input) {

            return Math.abs(input);

        }

    });