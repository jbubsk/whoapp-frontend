var React = require('react'),
    loaderActions = require('../actions/loaderActions'),
    Loader;

Loader = React.createClass({
    getInitialState: function () {
        return {
            display: 'none'
        }
    },

    componentWillMount: function () {
        loaderActions.addListener('toggle', function (state) {
            this.setState({
                display: state ? 'block' : 'none'
            });
        }.bind(this));
    },

    render: function () {

        var styles = {display: this.state.display};
        return (
            <div className="loader-overlay" style={styles}>
                <div className="center-align-block">
                    <div className="loader">
                        <img src="data:image/gif;base64,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"/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Loader;