angular.module('filter', [])

    .filter({
        isEqualType: isEqualType,
        '===': isEqualType
    });

function isEqualType() {

    return function (input, validator) {

        return input === validator;

    };

}