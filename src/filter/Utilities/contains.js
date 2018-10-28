angular.module('filter', [])
    .filter({
        contains: ['$parse', function ($parse) {

            function convertToArray(object) {

                return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                    return object[key];

                });

            }

            return function (collection, expression) {

                collection = angular.isObject(collection) ? convertToArray(collection) : collection;

                if (!angular.isArray(collection) || angular.isUndefined(expression)) {

                    return false;

                }

                return collection.some(function (element) {

                    return ((angular.isString(expression) && angular.isObject(element)) || angular.isFunction(expression)) ? $parse(expression)(element) : element === expression;

                });

            }

        }]
    });