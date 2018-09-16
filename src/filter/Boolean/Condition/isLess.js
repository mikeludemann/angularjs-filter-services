angular.module('filter', [])

    .filter({
        isLess: isLess,
        '<': isLess
    });

function isLess() {

    return function (input, validator) {

        return input < validator;

    };

}