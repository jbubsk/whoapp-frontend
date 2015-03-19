angular.module('router', ['ui.router']);
angular.module('login', []);
angular.module('signup', []);
angular.module('home', []);

angular.module('application', [
    'router',
    'login',
    'signup',
    'home',
    'translator'
])
    .constant(
    'MONTHS', {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    })
    .run(function ($rootScope, $state, AuthService, Session) {
        Session.initialize();

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            var signUrls = ['/login', '/signup'],
                isAuthenticated = AuthService.isAuthenticated(),
                publicUrls = angular.copy(signUrls),
                nextUrl;

            if (toState.url) {
                nextUrl = toState.url;
            }
            publicUrls.push('/');

            function inArray(array, element) {
                var i = array.length - 1,
                    inArray = false;

                for (i; i > -1; i--) {
                    if (array[i] === element) {
                        inArray = true;
                        return true;
                    }
                }
                return inArray;
            }

            /*forbid to access of login for authenticated users*/

            if (inArray(signUrls, nextUrl) && isAuthenticated) {
                event.preventDefault();
                $state.go('priv.home');
            }

            /*forbid to access for unauthenticated users*/

            if (!inArray(publicUrls, nextUrl) && !isAuthenticated) {
                event.preventDefault();
                $state.go('login');
            }
        });
    });