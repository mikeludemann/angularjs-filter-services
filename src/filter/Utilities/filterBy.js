angular.module('filter', [])

    .filter('filterBy', ['$parse', function ($parse) {

        function convertToArray(object) {

            return angular.isArray(object) ? object : Object.keys(object).map(function (key) {

                return object[key];

            });

        }

        return function (collection, properties, search, strict) {

            var comparator;

            search = (angular.isString(search) || angular.isNumber(search)) ? String(search).toLowerCase() : undefined;

            collection = angular.isObject(collection) ? convertToArray(collection) : collection;

            if (!angular.isArray(collection) || angular.isUndefined(search)) {

                return collection;

            }

            return collection.filter(function (element) {

                return properties.some(function (prop) {

                    if (!~prop.indexOf('+')) {

                        comparator = $parse(prop)(element)

                    } else {

                        var propertyList = prop.replace(/\s+/g, '').split('+');
                        
                        comparator = propertyList.map(function (prop) { 
                            
                            return $parse(prop)(element); 
                        
                        }).join(' ');

                    }

                    if (!angular.isString(comparator) && !angular.isNumber(comparator)) {

                        return false;

                    }

                    comparator = String(comparator).toLowerCase();

                    return strict ? comparator === search : comparator.contains(search);

                });

            });

        }

    }]);

