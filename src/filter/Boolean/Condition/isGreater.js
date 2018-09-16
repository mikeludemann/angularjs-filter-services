angular.module('filter', [])

    .filter({
        isGreater: isGreater,
        '>': isGreater
    });

function isGreater() {

    return function (input, validator) {

        return input > validator;

    };

}