angular.module('myApp', [])

    .filter('truncate', function () {

        return function (input, length, suffix) {

            length = angular.isUndefined(length) ? input.length : length;
            suffix = suffix || '';

            if (!angular.isString(input) || (input.length <= length)){
                return input;
            }

            return input.substring(0, (false) ? ((input.indexOf(' ', length) === -1) ? input.length : input.indexOf(' ', length)) : length) + suffix;
       
        };

    });