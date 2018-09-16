angular.module('filter', [])

    .filter('isEmpty', function () {
        
        return function (input) {

            return isEmpty(input);

        }

    });

function isEmpty(value) {

    return value === "";

}