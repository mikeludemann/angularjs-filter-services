angular.module('filter', [])

    .filter('beforeWhere', function () {

        function containsObject(partial, object) {

            var keys = Object.keys(partial);

            return keys.map(function (el) {

                return (object[el] !== undefined) && (object[el] == partial[el]);

            }).indexOf(false) == -1;

        }

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection, object) {

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection) || angular.isUndefined(object)) {

                return collection;

            }

            var index = collection.map(function (element) {

                return containsObject(object, element);

            }).indexOf(true);

            return collection.slice(0, (index === -1) ? collection.length : ++index);

        }

    });