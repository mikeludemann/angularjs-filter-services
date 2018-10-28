angular.module('filter', [])

    .filter('objectToArray', function () {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection, available) {

            if (!angular.isObject(collection)) {

                return collection;

            }

            return !available ? convertToArray(collection) : Object.keys(collection).map(function (key) {

                return angular.extend(collection[key], { $key: key });

            });

        }

    });