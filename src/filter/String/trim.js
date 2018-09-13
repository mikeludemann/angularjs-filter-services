angular.module('filter', [])

    .filter('trim', function () {

        return function (input) {

            var trim = '\\s';

            return angular.isString(input) ? input.replace(new RegExp('^' + trim + '+|' + trim + '+$', 'g'), '') : input;

        }

    });