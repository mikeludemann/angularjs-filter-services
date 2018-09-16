angular.module('filter', [])

    .filter('rounddown', function () {
        
        return function (input) {
        
        	var convert = angular.isString(input) ? Number(input) : input;

            return Math.floor(convert);

        }

    });