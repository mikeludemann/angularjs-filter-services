angular.module('filter', [])

    .filter({
        isLessOrEqual: isLessOrEqual,
        '<=': isLessOrEqual
    });

function isLessOrEqual() {

    return function (input, validator) {

        return input <= validator;

    };

}