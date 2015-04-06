var Login = React.createClass({
    render: function () {
        return (
            <div className="padding">
                <div className="page-title">
                    <span translate="LOGIN.title"></span>
                </div>
                <div className="login-form form">
                    <div className="main-error" ng-bind="main_error"></div>
                    <input type="text" className="form-control"
                        maxLength="15"
                        placeholder="Логин">
                    </input>
                    <input type="password" className="form-control"
                        maxLength="25"
                        placeholder="Пароль">
                    </input>
                </div>
                <div className="button-block login-btn">
                    <button type="button" className="btn btn-link">Войти</button>
                </div>
                <div className="button-block bottom">
                    <button type="button" className="btn btn-link">Зарегистрироваться</button>
                </div>
            </div>
        );
    }
});

module.exports = Login;