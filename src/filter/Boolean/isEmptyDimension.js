angular.module('filter', [])

    .filter('isEmptyDimension', function () {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection) {

            return angular.isObject(collection) ? !convertToArray(collection).length : !collection.length;

        }

    });