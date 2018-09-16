angular.module('filter', [])

    .filter('isDefined', function () {
        
        return function (input) {

            return angular.isDefined(input);

        }

    });