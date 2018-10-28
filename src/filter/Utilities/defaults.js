angular.module('filter', [])

    .filter('defaults', ['$parse', function ($parse) {

        function getKeys(object, stack, parent) {

            stack = stack || [];
            var keys = Object.keys(object);

            keys.forEach(function (element) {

                if (angular.isObject(object[element]) && !angular.isArray(object[element])) {

                    var p = parent ? parent + '.' + element : parent;
                    getKeys(object[element], stack, p || element);

                } else {

                    var key = parent ? parent + '.' + element : element;
                    stack.push(key)

                }

            });

            return stack

        }

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection, defaults) {

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection) || !angular.isObject(defaults)) {

                return collection;

            }

            var keys = getKeys(defaults);

            collection.forEach(function (element) {

                keys.forEach(function (key) {

                    var getter = $parse(key);
                    var setter = getter.assign;

                    if (angular.isUndefined(getter(element))) {

                        setter(element, getter(defaults))

                    }

                });

            });

            return collection;
        }

    }]);