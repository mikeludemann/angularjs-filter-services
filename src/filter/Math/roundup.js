angular.module('filter', [])

    .filter('roundup', function () {
        
        return function (input) {
        
        	var convert = angular.isString(input) ? Number(input) : input;

            return Math.ceil(convert);

        }

    });