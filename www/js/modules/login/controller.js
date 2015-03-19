angular.module('login')
    .controller('LoginCtrl', function ($log, $scope, $state, AuthService, $translate) {
        var handleError;

        $scope.model = {
            username: '',
            password: ''
        };
        $scope.error = {
            username: '',
            password: ''
        };

        $scope.btnName = 'Get location';

        $scope.login = function () {
            if (validate()) {
                AuthService.logIn($scope.model).then(function () {
                    $state.go('priv.home');
                }, function (error) {
                    handleError[error.status]();
                });
            }
        };

        $scope.toSignup = function () {
            $state.go('signup');
        };

        handleError = {
            401: function () {
                $scope.main_error = $translate.instant('LOGIN.login_failed');
            },
            0: function () {
                $scope.main_error = $translate.instant('LOGIN.login_failed');
            }
        };

        function validate() {
            var isValid = true;

            if (!$scope.model.username) {
                $scope.error.username = $translate.instant('VALIDATION.required');
                isValid = false;
            }
            if ($scope.model.username && $scope.model.username.length > 19) {
                $scope.error.username = $translate.instant('VALIDATION.too_long');
                isValid = false;
            }
            if (!$scope.model.password) {
                $scope.error.password = $translate.instant('VALIDATION.required');
                isValid = false;
            }
            if ($scope.model.password && $scope.model.password.length > 20) {
                $scope.error.password = $translate.instant('VALIDATION.too_long');
                isValid = false;
            }

            return isValid;
        }

        $scope.$watch('model.username', function () {
            $scope.error.username = '';
            $scope.main_error = '';
        });
        $scope.$watch('model.password', function () {
            $scope.error.password = '';
            $scope.main_error = '';
        });
    });
