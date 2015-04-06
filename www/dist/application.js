(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Layout = require('./components/Layout');

Whoapp = {
    run: function () {
        React.render(
            React.createElement(Layout, null),
            document.body
        );
    }
};

},{"./components/Layout":2}],2:[function(require,module,exports){
var Login = require('../components/Login');

var Layout = React.createClass({displayName: "Layout",
    render: function () {
        return (
            React.createElement("div", {id: "container"}, 
                React.createElement("div", {id: "header"}), 
                React.createElement("div", {id: "content"}, 
                    React.createElement("div", {id: "page_host"}, 
                        React.createElement(Login, null)
                    ), 
                    React.createElement("div", {className: "menu"})
                )
            )
        )
    }
});

module.exports = Layout;

},{"../components/Login":3}],3:[function(require,module,exports){
var Login = React.createClass({displayName: "Login",
    render: function () {
        return (
            React.createElement("div", {className: "padding"}, 
                React.createElement("div", {className: "page-title"}, 
                    React.createElement("span", {translate: "LOGIN.title"})
                ), 
                React.createElement("div", {className: "login-form form"}, 
                    React.createElement("div", {className: "main-error", "ng-bind": "main_error"}), 
                    React.createElement("input", {type: "text", className: "form-control", 
                        maxLength: "15", 
                        placeholder: "Логин"}
                    ), 
                    React.createElement("input", {type: "password", className: "form-control", 
                        maxLength: "25", 
                        placeholder: "Пароль"}
                    )
                ), 
                React.createElement("div", {className: "button-block login-btn"}, 
                    React.createElement("button", {type: "button", className: "btn btn-link"}, "Войти")
                ), 
                React.createElement("div", {className: "button-block bottom"}, 
                    React.createElement("button", {type: "button", className: "btn btn-link"}, "Зарегистрироваться")
                )
            )
        );
    }
});

module.exports = Login;

},{}]},{},[1]);
