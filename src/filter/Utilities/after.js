angular.module('filter', [])

    .filter('after', function () {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {
                
                return object[key];

            });

        }

        return function (collection, count) {
            
            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            return (angular.isArray(collection)) ? collection.slice(count) : collection;

        }
        
    });