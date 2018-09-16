angular.module('services', [])

    .service('speed', function () {

        this.mphToKPH = function (x) {

            return x * 1.609344;

        }

        this.mphToKnots = function (x) {

            return x / 1.150779;

        }

        this.mphToMach = function (x) {

            return x / 761.207;

        }

        this.kphToMPH = function (x) {

            return x / 1.609344;

        }

        this.kphToKnots = function (x) {

            return x / 1.852;

        }

        this.kphToMach = function (x) {

            return x / 1225.044;

        }

        this.knotsToMPH = function (x) {

            return x * 1.150779;

        }

        this.knotsToKPH = function (x) {

            return x * 1.852;

        }

        this.knotsToMach = function (x) {

            return x / 661.4708;

        }

        this.machToMPH = function (x) {

            return x * 761.207;

        }

        this.machToKPH = function (x) {

            return x * 1225.044;

        }

        this.machToKnots = function (x) {

            return x * 661.4708;

        }

    });