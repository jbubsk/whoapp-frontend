var React = require('react'),
    AuthService = require('../../services/authentication'),
    Form;

Form = React.createClass({
    _authClickHandler: function () {
        AuthService.login({
                username: React.findDOMNode(this.refs.username).value.trim(),
                password: React.findDOMNode(this.refs.password).value.trim()
            },
            function (result) {
                alert('Authentication is successful');
            },
            function (error) {

            });
    },

    render: function () {
        return (
            <div className="login-form form">
                <input type="text" className="form-control"
                    maxLength="15"
                    placeholder="Логин" ref="username"/>
                <input type="password" className="form-control"
                    maxLength="25"
                    placeholder="Пароль" ref="password"/>

                <div className="button-block login-btn">
                    <button type="button" className="btn btn-link" onClick={this._authClickHandler}>Войти</button>
                </div>
                <div className="button-block bottom">
                    <button type="button" className="btn btn-link">Зарегистрироваться</button>
                </div>
            </div>
        )
    }
});
module.exports = Form;