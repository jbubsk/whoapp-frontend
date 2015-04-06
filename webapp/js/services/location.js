angular.module('application')
    .factory('GeolocationService', function ($http) {
        var posOptions = {timeout: 5000, enableHighAccuracy: true, frequency: 1000};

        function startWatchPosition(successCallback, errorCallback) {
            return navigator.geolocation.watchPosition(
                function (position) {
                    successCallback(position);
                },
                function (err) {
                    errorCallback(err);
                },

                posOptions);
        }

        function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2 - lat1);  // deg2rad below
            var dLon = deg2rad(lon2 - lon1);
            var a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            if (d > 1) {
                d = d.toFixed(2) + ' km';
            } else {
                // Distance in m
                d = (d * 1000).toFixed(0) + ' m';
            }
            return d;
        }

        function deg2rad(deg) {
            return deg * (Math.PI / 180)
        }

        function shareGeolocation(data) {
            return $http.post('/private/sharelocation', data, {loader: false});
        }

        return {
            startWatchPosition: startWatchPosition,
            getDistanceFromLocation: getDistanceFromLatLonInKm,
            shareGeolocation: shareGeolocation,
            clearWatch: function (watch) {
                navigator.geolocation.clearWatch(watch);
            }
        }
    });