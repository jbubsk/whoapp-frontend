var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Menu;

Menu = React.createClass({
    render: function () {
        return (
            <div className="menu">
                <Link to="settings">Настройки</Link>
                <Link to="logout">Выйти</Link>
            </div>
        )
    }
});

module.exports = Menu;