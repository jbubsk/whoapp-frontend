angular.module('router')
    .constant('ROUTES', {
        public: '/api',
        private: '/api/private',
        host: "http://whoappbackend-jbubsk.rhcloud.com",
        socket_host: 'https://whoappbackend-jbubsk.rhcloud.com:8443'
        //host: 'http://192.168.9.144:8200'
    })
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        function getTemplate(templateName) {
            var templateDir = 'js/modules/',
                templateFile = '/template.html';

            return templateDir + templateName + templateFile;
        }

        $urlRouterProvider.otherwise('/login');

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: getTemplate('login'),
                controller: 'LoginCtrl',
                cache: false
            })

            .state('priv', {
                templateUrl: getTemplate('layout/priv'),
                controller: 'LoginCtrl',
                abstract: true,
                cache: false
            })

            .state('signup', {
                url: '/signup',
                templateUrl: getTemplate('signup'),
                controller: 'SignupCtrl',
                cache: false
            })

            .state('priv.home', {
                url: "/home",
                templateUrl: getTemplate("home"),
                controller: 'HomeCtrl',
                cache: false
            })
    }]);