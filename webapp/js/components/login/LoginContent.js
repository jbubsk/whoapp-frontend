var React = require('react'),
    PathUtils = require('../../../../bower_components/react-router/build/lib/PathUtils'),
    NavBar = require('../../components/NavBar'),
    Form = require('./Form');

var Login = React.createClass({
    getInitialState: function () {
        return {
            username: ''
        }
    },
    updateState: function (obj) {
        this.setState(obj);
    },
    statics: {
        willTransitionTo: function (transition) {
            console.log(transition);
        }
    },
    render: function () {
        /*var params = PathUtils.extractQuery(location.href),
            username = params ? params.username : '';*/

        //location.hash = location.hash.replace(/\?.*/, '');
        return (
            <div className="padding">
                <NavBar
                    text="Войти"
                    action="login"/>
                <Form/>
            </div>
        );
    }
});

module.exports = Login;