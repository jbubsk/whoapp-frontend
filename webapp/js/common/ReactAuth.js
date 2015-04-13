var React = require('react'),
    Session = require('../services/session'),
    Authentication = require('../services/authentication');

var ReactAuth = function () {
};

ReactAuth.createClass = function (component) {
    var C = React.createClass(component);

    return React.createClass($.extend(component, {
            statics: {
                willTransitionTo: function (transition) {
                    if (!Session.isAuthenticated()) {
                        transition.redirect('/login', {}, {'nextPath': transition.path});
                    }
                }
            },
            render: function () {
                return (
                    <C/>
                );
            }
        })
    );
};

module.exports = ReactAuth;