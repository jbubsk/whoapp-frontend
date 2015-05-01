var React = require('react'),
    Images = require('../constants/Images'),
    Header;

Header = React.createClass({

    _handleMenuClick: function () {
        this.props.onMenuClick();
    },

    render: function () {
        var headerContent = '';
        /*if (this.props.type === 'navigation') {
            headerContent =
            <div>
            </div>;
        } else {
            headerContent =
                <div>
                    <div className="menu-icon needsclick fl">
                        <img src={Images.menu} onClick={this._handleMenuClick}/>
                    </div>
                    <div className="header-title fl"></div>
                    <div className="clear"></div>
                </div>
        }*/

        return (
            <div id="header-container">
                <div id="header-content">
                    <div className="menu-icon needsclick fl" onClick={this._handleMenuClick}>
                        <img src={Images.menu}/>
                    </div>
                    <div className="header-title fl"></div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

module.exports = Header;
