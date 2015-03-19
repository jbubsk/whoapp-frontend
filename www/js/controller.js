angular.module('application')
    .controller('MainCtrl', function ($scope, $log, $state, AuthService, $rootScope) {

        $scope.doLogout = function () {
            AuthService.logOut().then(function () {
                $state.transitionTo('login');
                $rootScope.$broadcast('loggedout');
            }, function (error) {
                $log.error(error)
            });
        };

        $scope.isAuthenticated = function () {
            return AuthService.isAuthenticated();
        };
        $scope.refresh = function () {
            return $state.reload();
        }
    });