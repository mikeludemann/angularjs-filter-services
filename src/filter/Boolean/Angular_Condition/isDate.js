angular.module('filter', [])

    .filter('isDate', function () {
        
        return function (input) {

            return angular.isDate(input);

        }

    });