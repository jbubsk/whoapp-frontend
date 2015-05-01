var React = require('react'),
    Navigation = require('react-router').Navigation,
    navBarActions = require('../../actions/navBarActions'),
    EVENTS = navBarActions.EVENTS,
    AuthService = require('../../services/authentication'),
    Form;

Form = React.createClass({
    mixins: [Navigation],
    getInitialState: function () {
        return {
            mainError: '',
            username: this.props.username
        }
    },

    _onChangeInput: function () {
        var username = React.findDOMNode(this.refs.username).value.trim(),
            password = React.findDOMNode(this.refs.password).value.trim();

        navBarActions.emit(EVENTS.enableAction, username && password);
        this.setState({
            mainError: ''
        });
    },

    _onClickLogin: function () {
        AuthService.login({
                username: React.findDOMNode(this.refs.username).value.trim(),
                password: React.findDOMNode(this.refs.password).value.trim()
            },
            function () {
                this.context.router.transitionTo('home');
            }.bind(this),
            function () {
                this.setState({mainError: 'Неверные логин/пароль'});
            }.bind(this));
    },

    componentWillMount: function () {
        navBarActions.addListener(EVENTS.login, this._onClickLogin);
    },
    componentWillUnmount: function () {
        navBarActions.removeListener(EVENTS.login, this._onClickLogin);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return nextState.mainError !== this.state.mainError;
    },

    render: function () {
        return (
            <div className="login-form">
                <div className="main-error">{this.state.mainError}</div>
                <input
                    type="text"
                    className="form-control"
                    maxLength="15"
                    placeholder="Логин" ref="username"
                    value={this.state.username}
                    onChange={this._onChangeInput}/>
                <input
                    type="password"
                    className="form-control"
                    maxLength="25"
                    placeholder="Пароль" ref="password"
                    onChange={this._onChangeInput}/>
            </div>
        )
    }
});
module.exports = Form;
