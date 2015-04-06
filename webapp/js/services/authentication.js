var ajax = require('./ajax');
var AuthService = {
    logIn: function (model) {
        return $http.post('/login', model)
            .success(function (data, status, headers, config) {
                Session.create(data.username, data.userRole);
            })
            .error(function (data, status, headers, config) {
                Session.destroy();
            });
    },
    logOut: function () {
        return $http.get('/logout')
            .success(function (data, status, headers, config) {
                Session.destroy();
            })
            .error(function (data, status, headers, config) {

            });
    },
    signUp: function (data) {
        return $http.post('/register', data);
    },
    isAuthenticated: function () {
        return Session.isAuthenticated();
    }
};

angular.module('application')

    .factory('Session', function ($browser) {
        var session = {},
            cookieAuthStatus = 'auth_status',
            cookieUserName = 'username';

        session.create = function (username, userRole) {
            session.username = username;
            session.authenticated = true;
            $browser.cookies(cookieAuthStatus, '1');
            $browser.cookies(cookieUserName, username);
        };
        session.destroy = function () {
            session.username = null;
            session.authenticated = false;
            $browser.cookies(cookieAuthStatus);
            $browser.cookies(cookieUserName);
        };
        session.initialize = function () {
            var cookies = $browser.cookies();

            if (cookies) {
                session.username = cookies[cookieUserName];
                session.authenticated = !!cookies[cookieAuthStatus];
            }
        };
        session.isAuthenticated = function () {
            return session.authenticated;
        };
        session.getUsername = function () {
            return session.username;
        };

        return session;
    })

    .factory('AuthService', function ($http, Session) {
        var currentaccount = "currentaccount";

        return {
            logIn: function (model) {
                return $http.post('/login', model)
                    .success(function (data, status, headers, config) {
                        Session.create(data.username, data.userRole);
                    })
                    .error(function (data, status, headers, config) {
                        Session.destroy();
                    });
            },
            logOut: function () {
                return $http.get('/logout')
                    .success(function (data, status, headers, config) {
                        Session.destroy();
                    })
                    .error(function (data, status, headers, config) {

                    });
            },
            signUp: function (data) {
                return $http.post('/register', data);
            },
            isAuthenticated: function () {
                return Session.isAuthenticated();
            }
        }
    });

module.exports = AuthService;