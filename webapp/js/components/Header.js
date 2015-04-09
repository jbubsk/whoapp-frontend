var React = require('react'),
    Header;

Header = React.createClass({

    _handleMenuClick: function () {
        this.props.onMenuClick();
    },

    render: function () {
        return (
            <div id="#header_container">
                <div id="header_content">
                    <div className="menu-icon">
                        <img src="img/menu-24-64.png" onClick={this._handleMenuClick}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Header;
