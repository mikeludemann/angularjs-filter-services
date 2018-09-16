angular.module('services', [])

    .service('temperature', function () {

        this.celsiusToFahrenheit = function (x) {

            return (x - 32) / 1.8;

        }

        this.fahrenheitToCelsius = function (x) {

            return (x * 1.8) + 32;

        }

    });