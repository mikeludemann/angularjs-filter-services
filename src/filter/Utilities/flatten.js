angular.module('filter', [])

    .filter('flatten', function () {

        function flatten(array, index) {

            index = index || 0;

            if (index >= array.length)
                return array;

            if (angular.isArray(array[index])) {

                return flatten(array.slice(0, index).concat(array[index], array.slice(index + 1)), index);

            }

            return flatten(array, index + 1);

        }

        return function (collection, available) {

            function convertToArray(object) {

                return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                    return object[key];

                });

            }

            available = available || false;

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection)) {

                return collection;

            }

            return !available ? flatten(collection, 0) : [].concat.apply([], collection);

        }

    });