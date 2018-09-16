angular.module('services', [])

    .service('datetime', function () {

        this.year = function () {

            return new Date().getFullYear();

        }

        this.month = function () {

            return new Date().getMonth() + 1;

        }

        this.monthAtString = function () {

            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            return months[new Date().getMonth()];

        }

        this.day = function () {

            return new Date().getDate();

        }

        this.dayAtString = function () {

            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            
            return days[new Date().getDay()];

        }

        this.hour = function () {

            return new Date().getHours();

        }

        this.minute = function () {

            return new Date().getMinutes();

        }

        this.second = function () {

            return new Date().getSeconds();

        }

        this.millisecond = function () {

            return new Date().getMilliseconds();

        }

    });