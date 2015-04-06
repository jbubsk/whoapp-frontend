angular.module('signup')
    .controller('SignupCtrl', function ($scope, $state, AuthService, $translate) {
        var handleError;

        $scope.model = {
            username: '',
            password: '',
            confirmpassword: '',
            email: ''
        };

        $scope.error = {
            username: '',
            password: '',
            confirmpassword: '',
            email: ''
        };


        $scope.fontSize = {'font-size': 14 + 'px'};

        $scope.signup = function () {
            if (validate()) {
                AuthService.signUp($scope.model).then(function (result) {
                    if (!result.data.errors) {
                        $state.go('login');
                    }
                }, function (error) {
                    handleError[error.status]();
                });
            }
        };

        $scope.toLogin = function () {
            $state.go('login');
        };
        handleError = {
            401: function () {
                $scope.error = 'Signup failed'
            }
        };

        $scope.$watch('model.email', function (value) {
            if (value.length < 15) {
                setFontSize(14);
            }
            if (value.length > 16 && value.length < 20) {
                setFontSize(13);
            }
            if (value.length > 19 && value.length < 25) {
                setFontSize(12);
            }
        });

        function setFontSize(size) {
            $scope.fontSize = {'font-size': size + 'px'};
        }

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

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
            if (!$scope.model.email) {
                $scope.error.email = $translate.instant('VALIDATION.required');
                isValid = false;
            }
            if ($scope.model.email && !validateEmail($scope.model.email)) {
                $scope.error.email = $translate.instant('VALIDATION.wrong_format');
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
            if ($scope.model.password && $scope.model.confirmpassword && ($scope.model.password !== $scope.model.confirmpassword)) {
                $scope.error.confirmpassword = $translate.instant('VALIDATION.no_match');
                isValid = false;
            }
            if (!$scope.model.confirmpassword) {
                $scope.error.confirmpassword = $translate.instant('VALIDATION.required');
                isValid = false;
            }

            return isValid;
        }

        $scope.$watch('model.username', function () {
            $scope.error.username = '';
        });
        $scope.$watch('model.password', function () {
            $scope.error.password = '';
        });
        $scope.$watch('model.confirmpassword', function () {
            $scope.error.confirmpassword = '';
        });
        $scope.$watch('model.email', function () {
            $scope.error.email = '';
        });
    });
