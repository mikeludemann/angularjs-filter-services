angular.module('filter', [])

    .filter('concat', [function () {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }
        return function (collection, joined) {

            if (angular.isUndefined(joined)) {

                return collection;

            }

            if (angular.isArray(collection)) {

                return angular.isObject(joined) ? collection.concat(convertToArray(joined)) : collection.concat(joined);

            }

            if (angular.isObject(collection)) {

                var array = convertToArray(collection);

                return (angular.isObject(joined)) ? array.concat(convertToArray(joined)) : array.concat(joined);

            }

            return collection;

        };

    }
    
    ]);