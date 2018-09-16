angular.module('filter', [])

    .filter({
        isNotEqualType: isNotEqualType,
        '!==': isNotEqualType
    });

function isNotEqual() {

    return function (input, validator) {

        return input !== validator;

    };

}