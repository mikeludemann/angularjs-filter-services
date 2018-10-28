angular.module('filter', [])

    .filter('fuzzy', function () {

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

        return function (collection, search, caseSensitive) {

            var sensitive = caseSensitive || false;

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection) || angular.isUndefined(search)) {

                return collection;

            }

            search = (sensitive) ? search : search.toLowerCase();

            return collection.filter(function (element) {

                if (angular.isString(element)) {

                    element = (sensitive) ? element : element.toLowerCase();

                    return hasApproxPattern(element, search) !== false
                }

                return (angular.isObject(element)) ? _hasApproximateKey(element, search) : false;

            });

            function _hasApproximateKey(object, search) {

                var properties = Object.keys(object),
                    prop,
                    flag;

                return 0 < properties.filter(function (element) {

                    prop = object[element];


                    if (flag) return true;

                    if (angular.isString(prop)) {

                        prop = (sensitive) ? prop : prop.toLowerCase();

                        return flag = (hasApproxPattern(prop, search) !== false);

                    }

                    return false;

                }).length;

            }

        }

    });