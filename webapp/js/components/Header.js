var React = require('react'),
    Header;

Header = React.createClass({

    _handleMenuClick: function () {
        this.props.onMenuClick();
    },

    render: function () {
        return (
            <div id="header-container">
                <div id="header-content">
                    <div className="menu-icon needsclick fl">
                        <img src="img/menu-32.png" onClick={this._handleMenuClick}/>
                    </div>
                    <div className="header-title fl"></div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

module.exports = Header;
