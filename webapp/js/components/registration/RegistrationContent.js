var React = require('react'),
    NavBar = require('../../components/NavBar'),
    Form = require('./Form');

var Login = React.createClass({
    render: function () {
        return (
            <div className="padding">
                <NavBar
                    text="Зарегистрироваться"
                    action="register"/>
                <Form/>
            </div>
        );
    }
});

module.exports = Login;