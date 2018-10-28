angular.module('filter', [])

    .filter('every', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection, expression) {

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection) || angular.isUndefined(expression)) {

                return true;

            }

            return collection.every(function (elm) {

                return (angular.isObject(elm) || angular.isFunction(expression)) ? $parse(expression)(elm) : elm === expression;
            });


        }

    }]);

