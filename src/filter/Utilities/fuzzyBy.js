angular.module('filter', [])

    .filter('fuzzyBy', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        function hasApproxPattern(word, pattern) {

            function indexOf(word, position, character) {

                var j = 0;

                while ((position + j) <= word.length) {

                    if (word.charAt(position + j) == character) return j;

                    j++;

                }

                return -1;

            }

            var position = 0;

            for (var i = 0; i <= pattern.length; i++) {

                var index = indexOf(word, position, pattern.charAt(i));

                if (index == -1) {

                    return false;

                }

                position += index + 1;

            }

            return true

        }

        return function (collection, property, search, caseSensitive) {

            var sensitive = caseSensitive || false,
                prop,
                getter;

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection) || angular.isUndefined(property) || angular.isUndefined(search)) {

                return collection;

            }

            getter = $parse(property);

            return collection.filter(function (element) {

                prop = getter(element);

                if (!angular.isString(prop)) {

                    return false;

                }

                prop = (sensitive) ? prop : prop.toLowerCase();
                search = (sensitive) ? search : search.toLowerCase();

                return hasApproxPattern(prop, search) !== false

            })

        }

    }]);