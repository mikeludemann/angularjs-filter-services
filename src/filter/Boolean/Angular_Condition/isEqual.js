angular.module('filter', [])

    .filter('isEqual', function () {
        
        return function (o1, o2) {

            return angular.equals(o1, o2);

        }

    });