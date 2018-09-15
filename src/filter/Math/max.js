angular.module('filter', [])

    .filter('max', ['$parse', function ($parse) {

        return function (input, expression) {

            if (!angular.isArray(input)) {

                return input;

            }

            return angular.isUndefined(expression) ? Math.max.apply(Math, input) : input[getMaximum(input, expression)];

        };

        function getMaximum(array, expression) {

            var mapping = array.map(function (element) {

                return $parse(expression)(element);

            });

            return mapping.indexOf(Math.max.apply(Math, mapping));

        }

    }]);