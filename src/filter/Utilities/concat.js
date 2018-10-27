angular.module('filter', [])

    .filter('concat', [function () {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }
        return function (collection, join) {

            if (angular.isUndefined(join)) {

                return collection;

            }

            if (angular.isArray(collection)) {

                return angular.isObject(join) ? collection.concat(convertToArray(join)) : collection.concat(join);

            }

            if (angular.isObject(collection)) {

                var array = convertToArray(collection);

                return (angular.isObject(join)) ? array.concat(convertToArray(join)) : array.concat(join);

            }

            return collection;

        };

    }
    
    ]);