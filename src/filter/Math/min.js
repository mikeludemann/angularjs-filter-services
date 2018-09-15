angular.module('filter', [])

    .filter('min', ['$parse', function ($parse) {

        return function (input, expression) {

            if (!angular.isArray(input)) {

                return input;

            }

            return angular.isUndefined(expression) ? Math.min.apply(Math, input) : input[getMinimum(input, expression)];

        };

        // Helper Function

        function getMinimum(array, exp) {

            var mapping = array.map(function (element) {

                return $parse(exp)(element);

            });

            return mapping.indexOf(Math.min.apply(Math, mapping));

        }

    }]);