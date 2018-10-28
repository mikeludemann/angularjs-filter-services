angular.module('filter', [])

    .filter('xor', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (columnOne, columnTwo, expression) {

            expression = expression || false;

            columnOne = angular.isObject(columnOne) ? convertToArray(columnOne) : columnOne;
            columnTwo = angular.isObject(columnTwo) ? convertToArray(columnTwo) : columnTwo;

            if (!angular.isArray(columnOne) || !angular.isArray(columnTwo)) {

                return columnOne;

            }

            return columnOne.concat(columnTwo).filter(function (element) {

                return !(some(element, columnOne) && some(element, columnTwo));

            });

            function some(element, column) {

                var getter = $parse(expression);

                return column.some(function (dataElement) {

                    return expression ? angular.equals(getter(dataElement), getter(element)) : angular.equals(dataElement, element);

                });

            }

        }

    }]);