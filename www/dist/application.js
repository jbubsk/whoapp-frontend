(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Login = require('./components/Login');

Whoapp = {
    run: function () {
        React.render(
            React.createElement(Login, null),
            //document.getElementById('app')
            document.body
        );
    }
};

},{"./components/Login":2}],2:[function(require,module,exports){
var Login = React.createClass({displayName: "Login",
    render: function () {
        alert('335');
        console.log('335');
        return(
            React.createElement("div", null, "Hello")
        );
    }
});

module.exports = Login;

},{}]},{},[1]);
