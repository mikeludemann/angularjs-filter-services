angular.module('filter', [])

    .filter('split', function () {

        function escapeRegularExpression(input) {

            return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

        }

        return function (input, delimiter, index) {

            var regexp, 
            matching, 
            splitter, 
            tmp;

            if (angular.isUndefined(input) || !angular.isString(input)) {

                return null;

            }

            if (angular.isUndefined(delimiter)) {

                delimiter = '';

            }

            if (isNaN(index) || index == "" || index == null) {

                index = 0;

            }

            regexp = new RegExp(escapeRegularExpression(delimiter), 'g');
            matching = input.match(regexp);

            if (isNull(matching) || index >= matching.length) {

                return [input];

            }

            if (index === 0) {

                return input.split(delimiter);

            }

            splitter = input.split(delimiter);
            tmp = splitter.splice(0, index + 1);
            splitter.unshift(tmp.join(delimiter));

            return splitter;

        };

    });

// Helper Function

function isNull(value) {

    return value === null;

}