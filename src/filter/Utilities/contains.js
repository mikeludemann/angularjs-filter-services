angular.module('filter', [])
    .filter({
        contains: ['$parse', function ($parse) {

            return function (collection, expression) {

                collection = angular.isObject(collection) ? toArray(collection) : collection;

                if (!angular.isArray(collection) || angular.isUndefined(expression)) {

                    return false;

                }

                return collection.some(function (element) {

                    return ((angular.isString(expression) && angular.isObject(element)) || angular.isFunction(expression)) ? $parse(expression)(element) : element === expression;

                });

            }

        }]
    });

function toArray(object) {

    return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

    });

}