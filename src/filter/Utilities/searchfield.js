angular.module('filter', [])

    .filter('searchfield', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection) {

            var getter,
                field;

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            var args = Array.prototype.slice.call(arguments, 1);

            if (!angular.isArray(collection) || !args.length) {

                return collection;

            }

            return collection.map(function (position) {

                field = args.map(function (field) {

                    getter = $parse(field);

                    return getter(position);

                }).join(' ');

                return angular.extend(position, { searchfield: field });

            });

        }

    }]);