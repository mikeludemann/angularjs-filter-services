angular.module('filter', [])

    .filter('range', function () {

        return function (input, total, start, increment, callback) {

            start = start || 0;

            increment = increment || 1;

            for (var i = 0; i < parseInt(total); i++) {

                var j = start + i * increment;

                input.push(angular.isFunction(callback) ? callback(j) : j);

            }

            return input;

        };

    });