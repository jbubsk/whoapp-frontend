var React = require('react'),
    Navigation = require('react-router').Navigation,
    AuthService = require('../../services/authentication'),
    navBarActions = require('../../actions/navBarActions'),
    EVENTS = navBarActions.EVENTS,
    Form;

Form = React.createClass({
    mixins: [ Navigation ],

    getInitialState: function () {
        return {
            mainError: ''
        }
    },

    _onChangeInput: function () {
        var username = React.findDOMNode(this.refs.username).value.trim(),
            password = React.findDOMNode(this.refs.password).value.trim(),
            email = React.findDOMNode(this.refs.email).value.trim();

        navBarActions.emit(EVENTS.enableAction, username && password && email);
        this.setState({
            mainError: ''
        });
    },

    _handleRegister: function () {
        var username = React.findDOMNode(this.refs.username).value.trim();
        AuthService.register({
                username: username,
                password: React.findDOMNode(this.refs.password).value.trim(),
                email: React.findDOMNode(this.refs.email).value.trim()
            },
            function () {
                this.context.router.transitionTo('login', { username: username });
            }.bind(this),
            function (error) {

            });
    },

    componentWillMount: function () {
        navBarActions.addListener(EVENTS.register, this._handleRegister);
    },
    componentWillUnmount: function () {
        navBarActions.removeListener(EVENTS.register, this._handleRegister);
    },

    render: function () {
        return (
            <div className="login-form">
                <div className="main-error">{this.state.mainError}</div>
                <input type="text" className="form-control"
                    maxLength="15"
                    placeholder="Логин"
                    ref="username"
                    onChange={this._onChangeInput}/>
                <input type="password" className="form-control"
                    maxLength="25"
                    placeholder="Пароль"
                    ref="password"
                    onChange={this._onChangeInput}/>
                <input type="text" className="form-control"
                    maxLength="25"
                    placeholder="E-mail"
                    ref="email"
                    onChange={this._onChangeInput}/>
            </div>
        )
    }
});
module.exports = Form;
