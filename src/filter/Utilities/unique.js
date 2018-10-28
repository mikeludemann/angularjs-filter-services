angular.module('filter', [])

    .filter('unique', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection, property) {

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection)) {

                return collection;

            }

            var uniqueArray = [],
                get = $parse(property);

            return (angular.isUndefined(property)) ? collection.filter(function (element, position, self) {

                return self.indexOf(element) === position;

            }) : collection.filter(function (element) {

                var prop = get(element);

                if (some(uniqueArray, prop)) {

                    return false;

                }

                uniqueArray.push(prop);

                return true;

            });

            function some(array, position) {

                if (angular.isUndefined(position)) {

                    return false;

                }

                return array.some(function (element) {

                    return angular.equals(element, position);

                });

            }

        }

    }]);