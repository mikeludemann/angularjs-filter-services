angular.module('services', [])

    .service('weight', function () {

        this.poundToKilogram = function (x) {

            return x / 2.2046;

        }

        this.poundToOunce = function (x) {

            return x * 16;

        }

        this.poundToGram = function (x) {

            return x / 0.0022046;

        }

        this.poundToStone = function (x) {

            return x * 0.071429;

        }

        this.KilogramToPound = function (x) {

            return x * 2.2046;

        }

        this.KilogramToOunce = function (x) {

            return x * 35.274;

        }

        this.KilogramToGram = function (x) {

            return x * 1000;

        }

        this.KilogramToStone = function (x) {

            return x * 0.1574;

        }

        this.OunceToPound = function (x) {

            return x * 0.0625;

        }

        this.OunceToKilogram = function (x) {

            return x / 35.274;

        }

        this.OunceToGram = function (x) {

            return x / 0.035274;

        }

        this.OunceToStone = function (x) {

            return x * 0.0044643;

        }

        this.GramToPound = function (x) {

            return x * 0.0022046;

        }

        this.GramToKilogram = function (x) {

            return x / 1000;

        }

        this.GramToOunce = function (x) {

            return x * 0.035274;

        }

        this.GramToStone = function (x) {

            return x * 0.00015747;

        }

        this.StoneToPound = function (x) {

            return x * 14;

        }

        this.StoneToKilogram = function (x) {

            return x / 0.15747;

        }

        this.StoneToOunce = function (x) {

            return x * 224;

        }

        this.StoneToGram = function (x) {

            return x / 0.00015747;

        }

    });