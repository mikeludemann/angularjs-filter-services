angular.module('filter', [])

    .filter({
        isEqual: isEqual,
        '==': isEqual
    });

function isEqual() {

    return function (input, validator) {

        return input == validator;

    };

}