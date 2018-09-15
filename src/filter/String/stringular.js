angular.module('filter', [])

    .filter('stringular', function () {

        return function (input) {

            var arguments = Array.prototype.slice.call(arguments, 1);

            return input.replace(/{(\d+)}/g, function (matching, index) {

                return angular.isUndefined(arguments[index]) ? matching : arguments[index];

            });

        }

    });