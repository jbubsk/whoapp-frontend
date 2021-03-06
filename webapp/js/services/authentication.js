var ajax = require('./../common/ajax'),
    Session = require('./session');

var AuthService = {

    login: function(model, successCallback, errorCallback) {
        ajax.send({
            url: '/login',
            method: 'post',
            data: model,
            publicApi: true,
            success: function(data) {
                Session.create(data.username, data.userRole);
                successCallback();
            },
            error: function(error) {
                console.error("Response text: " + error.responseText + "Status: " + error.status + "\nStatus text: " + error.statusText);
                if (errorCallback) {
                    errorCallback();
                }
            }
        });
    },

    logout: function(successCallback, errorCallback) {
        ajax.send({
            url: '/logout',
            publicApi: true,
            success: function() {
                Session.destroy();
                if (successCallback) {
                    successCallback();
                }
            },
            error: function(error) {
                console.error("Response text: " + error.responseText + "Status: " + error.status + "\nStatus text: " + error.statusText);
            }
        });
    },
    
    register: function (model, successCallback, errorCallback) {
        ajax.send({
            url: '/signup',
            method: 'post',
            data: model,
            publicApi: true,
            success: function() {
                Session.destroy();
                if (successCallback) {
                    successCallback();
                }
            },
            error: function(error) {
                console.error("Response text: " + error.responseText + "Status: " + error.status + "\nStatus text: " + error.statusText);
            }
        });
    }
};

module.exports = AuthService;
