angular.module('filter', [])

    .filter({
        isGreaterOrEqual: isGreaterOrEqual,
        '>=': isGreaterOrEqual
    });

function isGreaterOrEqual() {

    return function (input, validator) {

        return input >= validator;

    };
    
}