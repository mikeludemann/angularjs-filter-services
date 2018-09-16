angular.module('filter', [])

    .filter({
        isNotEqual: isNotEqual,
        '!=': isNotEqual
    });

function isNotEqual() {

    return function (input, validator) {

        return input != validator;

    };

}