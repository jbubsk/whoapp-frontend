var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Menu;

Menu = React.createClass({
    render: function () {
        return (
            <div id="menu">
                <div>
                    <Link to="settings">Настройки</Link>
                </div>
                <div>
                    <Link to="logout">Выйти</Link>
                </div>
            </div>
        )
    }
});

module.exports = Menu;