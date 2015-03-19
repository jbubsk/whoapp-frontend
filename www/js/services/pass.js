angular.module('application')
    .factory('PassService', function () {
        var objects = {};

        return {
            getObject: function (key) {
                return objects[key];
            },
            setObject: function (key, data) {
                objects[key] = data;
            }
        }
    });