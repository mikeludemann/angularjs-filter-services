angular.module('services', [])

    .service('length', function () {

        this.feetToMeter = function (x) {

            return x / 3.2808;

        }

        this.feetToInch = function (x) {

            return x * 12;

        }

        this.feetToCM = function (x) {

            return x / 0.032808;

        }

        this.feetToYard = function (x) {

            return x * 0.33333;

        }

        this.feetToKilometer = function (x) {

            return x / 3280.8;

        }

        this.feetToMile = function (x) {

            return x * 0.00018939;

        }

        this.meterToFeet = function (x) {

            return x * 3.2808;

        }

        this.meterToInch = function (x) {

            return x * 39.370;

        }

        this.meterToCM = function (x) {

            return x / 0.01;

        }

        this.meterToYard = function (x) {

            return x * 1.0936;

        }

        this.meterToKilometer = function (x) {

            return x / 1000;

        }

        this.meterToMile = function (x) {

            return x * 0.00062137;

        }

        this.inchToMeter = function (x) {

            return x / 39.370;

        }

        this.inchToFeet = function (x) {

            return x * 0.083333;

        }

        this.inchToCM = function (x) {

            return x / 0.39370;

        }

        this.inchToYard = function (x) {

            return x * 0.027778;

        }

        this.inchToKilometer = function (x) {

            return x / 39370;

        }

        this.inchToMile = function (x) {

            return x * 0.000015783;

        }

        this.cmToFeet = function (x) {

            return x * 0.032808;

        }

        this.cmToInch = function (x) {

            return x * 0.39370;

        }

        this.cmToMeter = function (x) {

            return x / 100;

        }

        this.cmToYard = function (x) {

            return x * 0.010936;

        }

        this.cmToKilometer = function (x) {

            return x / 100000;

        }

        this.cmToMile = function (x) {

            return x * 0.0000062137;

        }

        this.yardToFeet = function (x) {

            return x * 3;

        }

        this.yardToInch = function (x) {

            return x * 36;

        }

        this.yardToMeter = function (x) {

            return x / 1.0936;

        }

        this.yardToCM = function (x) {

            return x / 0.010936;

        }

        this.yardToKilometer = function (x) {

            return x / 1093.6;

        }

        this.yardToMile = function (x) {

            return x * 0.00056818;

        }

        this.kilometerToFeet = function (x) {

            return x * 3280.8;

        }

        this.kilometerToInch = function (x) {

            return x * 39370;

        }

        this.kilometerToMeter = function (x) {

            return x * 1000;

        }

        this.kilometerToYard = function (x) {

            return x * 1093.6;

        }

        this.kilometerToCM = function (x) {

            return x * 100000;

        }

        this.kilometerToMile = function (x) {

            return x * 0.62137;

        }

        this.mileToFeet = function (x) {

            return x * 5280;

        }

        this.mileToInch = function (x) {

            return x * 63360;

        }

        this.mileToMeter = function (x) {

            return x / 0.00062137;

        }

        this.mileToYard = function (x) {

            return x * 1760;

        }

        this.mileToCM = function (x) {

            return x / 0.0000062137;

        }

        this.mileToKilometer = function (x) {

            return x / 0.62137;

        }

    });