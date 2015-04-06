angular.module('home')
    .controller('HomeCtrl', function ($scope, $log, $http, GeolocationService, Session, $rootScope, ROUTES) {
        var watch,
            socket = io.connect(ROUTES.socket_host);

        socket.emit('user:connected', Session.getUsername());
        $scope.yourLocation = {
            latitude: '',
            longitude: ''
        };
        $scope.friendLocations = [];
        $scope.distance = {value: ''};
        $scope.error = '';

        /*find people*/
        $scope.getLocation = function () {
            $http.get('/private/getlocations', {loader: false}).then(
                function (result) {
                    var username = Session.getUsername();

                    $scope.friendLocations.length = 0;
                    result.data.result.forEach(function (item) {
                        var distance = GeolocationService.getDistanceFromLocation(
                            $scope.yourLocation.latitude,
                            $scope.yourLocation.longitude,
                            item.latitude,
                            item.longitude);

                        if (item.username !== username) {
                            $scope.friendLocations.push({
                                username: item.username,
                                latitude: parseFloat(item.latitude).toFixed(8),
                                longitude: parseFloat(item.longitude).toFixed(8),
                                distance: distance
                            });
                        }
                    });
                },
                function (err) {
                    $log.error(err);
                });
        };


        watch = GeolocationService.startWatchPosition(
            function (position) {
                $scope.error = '';
                $scope.yourLocation.latitude = position.coords.latitude.toFixed(8);
                $scope.yourLocation.longitude = position.coords.longitude.toFixed(8);

                socket.emit('user:location:changed', Session.getUsername());
                GeolocationService.shareGeolocation({
                    latitude: $scope.yourLocation.latitude,
                    longitude: $scope.yourLocation.longitude
                }).then(
                    function () {
                        $log.debug(Session.getUsername() + ' shared his location');
                    },
                    function (err) {
                        $log.warn(err);
                    });
            },
            function (err) {
                $log.warn('Error occurred during getting geolocation. ' + err.message);
                $scope.error = err.message;
            }
        );

        socket.on('user:location:changed', function (data) {
            $scope.getLocation();
        });

        socket.on('user:connected', function (data) {
            $log.debug(data);
        });

        $rootScope.$on('loggedout', function () {
            socket.close();
            GeolocationService.clearWatch(watch);
        });
    });
