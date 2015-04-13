var React = require('react'),
    Router = require('react-router'),
    Authentication = require('../services/authentication'),
    Session = require('../services/session'),
    Link = Router.Link,
    Login = require('../components/login/Login'),
    Logout;

Logout = React.createClass({
    getInitialState: function () {
        return {
            loggedin: true
        }
    },
    componentWillMount: function () {
        Session.destroy();
        Authentication.logout(function () {
            this.setState({loggedin: false});
        }.bind(this));
    },
    render: function () {
        var content = this.state.loggedin ? <div/> : <Login/>;
        return (
            content
        )
    }
});
module.exports = Logout;