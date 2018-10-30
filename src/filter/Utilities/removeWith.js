angular.module('filter', [])

    .filter('removeWith', function () {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        function containObject(partial, object) {

            var keys = Object.keys(partial);

            return keys.map(function (el) {

                return (object[el] !== undefined) && (object[el] == partial[el]);

            }).indexOf(false) == -1;

        }

        return function (collection, object) {

            if (angular.isUndefined(object)) {

                return collection;

            }

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            return collection.filter(function (element) {

                return !containObject(object, element);

            });

        }

    });