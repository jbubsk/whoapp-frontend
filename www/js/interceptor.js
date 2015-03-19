angular.module('application')
    .factory('authHttpInterceptor', function ($q, $injector, $location, ROUTES) {

        return {
            'request': function (config) {
                var requestedUrl = config.url;

                if (requestedUrl.indexOf('template.html') === -1) {

                    if (config.loader !== false) {

                    }
                    config.withCredentials = true;
                    if (config.private) {
                        requestedUrl = ROUTES.private + requestedUrl;
                    } else {
                        requestedUrl = ROUTES.public + requestedUrl;
                    }
                    /*if ($location.host() === 'localhost' || $location.host() === '192.168.9.144') {
                     config.url = ROUTES.localhost + requestedUrl;
                     } else {
                     config.url = ROUTES.host + requestedUrl;
                     }*/
                    config.url = ROUTES.host + requestedUrl;
                }
                return config;
            },

            'response': function (response) {
                return response;
            },

            'responseError': function (rejection) {
                var $state = $injector.get('$state');

                if (rejection.status === 401) {
                    if ($state.current.url.indexOf('/login') === -1) {
                        $injector.get('Session').destroy();
                        $state.go('login');
                    }
                }
                return $q.reject(rejection);
            }
        };
    })
    .config(function ($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $httpProvider.interceptors.push('authHttpInterceptor');
    });