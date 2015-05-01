var React = require('react'),
    Navigation = require('react-router').Navigation,
    Land;

Land = React.createClass({
    mixins: [ Navigation ],

    _handleClick: function (hash) {
        this.context.router.transitionTo(hash);
    },
    render: function () {
        return (
            <div className="land">
                <div className='center-align-block'>
                    <button
                        className="btn btn-success"
                        onClick={this._handleClick.bind(null, 'login')}>Войти</button>
                </div>
                <div className='center-align-block'>
                    <button
                        className="btn btn-success"
                        onClick={this._handleClick.bind(null, 'registration')}>Зарегистрироваться</button>
                </div>
            </div>
        )
    }
});

module.exports = Land;