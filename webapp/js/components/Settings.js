var React = require('react'),
    ReactAuth = require('../common/ReactAuth'),
    Settings;

Settings = ReactAuth.createClass({
    render: function () {
        return (
            <div>Настройки</div>
        )
    }
});

module.exports = Settings;