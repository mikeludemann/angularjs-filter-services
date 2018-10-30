angular.module('filter', [])

    .filter('first', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        function getFirstElementMatch(array, index, expression) {

            var count = 0;

            return array.filter(function (element) {

                var different = angular.isDefined(expression) ? (count < index && expression(element)) : count < index;

                count = different ? count + 1 : count;

                return different;

            });

        }

        if (!String.prototype.contains) {

            String.prototype.contains = function () {

                return String.prototype.indexOf.apply(this, arguments) !== -1;

            };

        }

        return function (collection) {

            var index,
                getter,
                args;

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection)) {

                return collection;

            }

            args = Array.prototype.slice.call(arguments, 1);
            index = (angular.isNumber(args[0])) ? args[0] : 1;
            getter = (!angular.isNumber(args[0])) ? args[0] : (!isNumber(args[1])) ? args[1] : undefined;

            return (args.length) ? getFirstElementMatch(collection, index, (getter) ? $parse(getter) : getter) : collection[0];

        }

    }]);