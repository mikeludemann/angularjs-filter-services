angular.module('filter', [])

    .filter('isNull', function () {
        
        return function (input) {

            return isNull(input);

        }

    });

function isNull(value) {

    return value === null;

}