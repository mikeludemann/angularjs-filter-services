angular.module('filter', [])

    .filter('last', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        function getFirstElementMatch(array, index, expression) {

            var count = 0;

            return array.filter(function (elm) {

                var different = angular.isDefined(expression) ? (count < index && expression(elm)) : count < index;

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
                args,
                reverse = angular.copy(collection);

            reverse = angular.isObject(reverse) ? convertToArray(reverse) : reverse;

            if (!angular.isArray(reverse)) {

                return reverse;

            }

            args = Array.prototype.slice.call(arguments, 1);
            index = (angular.isNumber(args[0])) ? args[0] : 1;
            getter = (!angular.isNumber(args[0])) ? args[0] : (!angular.isNumber(args[1])) ? args[1] : undefined;

            return (args.length) ? getFirstElementMatch(reverse.reverse(), index, (getter) ? $parse(getter) : getter).reverse() : reverse[reverse.length - 1];

        }

    }]);