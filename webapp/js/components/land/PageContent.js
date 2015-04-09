var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Header = require('../Header'),
    PageContent;

PageContent = React.createClass({
    getInitialState: function () {
        return {
            position: 0
        }
    },

    openMenu: function () {
        var position;

        if (this.state.position < 270) {
            position = Math.max(0, this.state.position + 30);
            this.setState({position: position});
        }
    },

    closeMenu: function () {
        var position;

        if (this.state.position >= 0) {
            position = Math.max(0, this.state.position - 30);
            this.setState({position: position});
        }
    },

    componentDidUpdate: function() {
        if (this.props.isMenuOpened) {
            requestAnimationFrame(this.closeMenu);
        } else {
            requestAnimationFrame(this.openMenu);
        }
    },

    render: function () {
        var divStyle = {left: this.state.position};

        return (
            <div id="content" style={divStyle}>
                <Header
                    onMenuClick={this.props.onMenuClick}/>
                <div id="page_host">
                    <RouteHandler/>
                </div>
            </div>
        )
    }
});

module.exports = PageContent;
