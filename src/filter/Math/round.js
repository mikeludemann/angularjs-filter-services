angular.module('filter', [])

    .filter('round', function () {
        
        return function (input) {

            var rounding = angular.isString(input) ? Number(input) : input;

            return Math.round(rounding);

        }

    });