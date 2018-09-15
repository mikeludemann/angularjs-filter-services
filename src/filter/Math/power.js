angular.module('filter', [])

    .filter('power', function () {

        return function (base, exponent) {

            var firstPow = angular.isString(base) ? Number(base) : base;
            var secondPow = angular.isString(exponent) ? Number(exponent) : exponent;

            return Math.pow(firstPow, secondPow);

        }

    });