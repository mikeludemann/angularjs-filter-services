angular.module('filter', [])

    .filter('percent', function () {

        return function (input, total, round) {

            var divider = angular.isString(input) ? Number(input) : input;
            total = total || 100;
            round = round || false;

            if (!angular.isNumber(divider) || isNaN(divider)) return input;

            return round ? Math.round((divider / total) * 100) : (divider / total) * 100;

        }
        
    });