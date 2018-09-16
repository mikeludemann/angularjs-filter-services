angular.module('filter', [])

    .filter('isElement', function () {
        
        return function (input) {

            return angular.isElement(input);

        }

    });