angular.module('filter', [])

    .filter('arctangantQuotient', function () {

        return function (input, quotient) {

            var convert = angular.isString(input) ? Number(input) : input;
            var convertSecond = angular.isString(quotient) ? Number(quotient) : quotient;

            return Math.atan2(convert, convertSecond);

        }

    });