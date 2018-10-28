angular.module('filter', [])

    .filter('pick', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection, expression) {

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection) || angular.isUndefined(expression)) {

                return collection;

            }

            return collection.filter(function (element) {

                return $parse(expression)(element);

            });

        }

    }]);