angular.module('services', [])

    .service('utilities', function () {

        this.hexadecimal = function (x) {

            return x.toString(16);

        }

        this.decrement = function (x, index) {

            if (index == null ||  index ==  "") {

                index = 1;

            }

            return x - index;

        }

        this.increment = function (x, index) {

            if (index == null ||  index ==  "") {

                index = 1;

            }

            return x + index;

        }

        this.add = function (x, y) {

            if (x == null || x ==  "") {

                x = 0;

            }

            if (y == null || y ==  "") {

                y = 0;

            }

            return x + y;

        }

        this.subtract = function (x, y) {

            if (x == null || x ==  "") {

                x = 0;

            }

            if (y == null || y ==  "") {

                y = 0;

            }

            return x - y;

        }

        this.multiply = function (x, y) {

            if (x == null || x ==  "") {

                x = 0;

            }

            if (y == null || y ==  "") {

                y = 0;

            }

            return x * y;

        }

        this.divide = function (x, y) {

            if (x == null || x ==  "") {

                x = 0;

            }

            if (y == null || y ==  "") {

                y = 0;

            }

            return x / y;

        }

        this.modulo = function (x, y) {

            if (x == null || x ==  "") {

                x = 0;

            }

            if (y == null || y ==  "") {

                y = 0;

            }

            if (y == 0){

                return 'false';

            }

            return x % y;

        }

    });