var React = require('react'),
    navBarActions = require('../actions/navBarActions'),
    Images = require('../constants/Images'),
    NavBar;

NavBar = React.createClass({
    getInitialState: function () {
        return {
            isBtnEnabled: false
        }
    },

    _handleBack: function () {
        location.hash = this.props.back || '/';
    },

    _handleAction: function () {
        if (this.state.isBtnEnabled) {
            navBarActions.emit(this.props.action);
        }
    },

    updateState: function (isBtnEnabled) {
        this.setState({
            isBtnEnabled: isBtnEnabled
        });
    },

    componentWillMount: function () {
        navBarActions.addListener('enableAction', this.updateState);
    },

    componentWillUnmount: function () {
        navBarActions.removeListener('enableAction', this.updateState);
    },

    render: function () {
        var styles = {color: this.state.isBtnEnabled ? 'black' : 'green'};

        return (
            <div id="header-container">
                <div id="header-content">
                    <div className="menu-icon needsclick fl">
                        <img src={Images.btnBack}
                            onClick={this._handleBack}/>
                    </div>
                    <div style={styles}
                        className="header-navig-title fr"
                        onClick={this._handleAction}>{this.props.text}</div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

module.exports = NavBar;