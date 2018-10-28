angular.module('filter', [])

    .filter('remove', function () {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection) {

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            var args = Array.prototype.slice.call(arguments, 1);

            if (!angular.isArray(collection)) {

                return collection;

            }

            return collection.filter(function (element) {

                return !args.some(function (structure) {

                    return angular.equals(structure, element);

                })

            });

        }

    });