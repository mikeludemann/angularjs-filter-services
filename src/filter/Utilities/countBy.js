angular.module('filter', [])

    .filter('countBy', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection, property) {

            var result = {},
                get = $parse(property),
                props;

            collection = (angular.isObject(collection)) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection) || angular.isUndefined(property)) {

                return collection;

            }

            collection.forEach(function (element) {

                props = get(element);

                if (!result[props]) {

                    result[props] = 0;

                }

                result[props]++;

            });

            return result;

        }
        
    }]);