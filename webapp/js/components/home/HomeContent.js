var React = require('react'),
    ReactAuth = require('../../common/ReactAuth'),
    Navigation = require('react-router').Navigation,
    TodoDropdown = require('./TodoDropdown'),
    PeopleDropdown = require('./PeopleDropdown');

var Home = ReactAuth.createClass({
    mixins: [Navigation],

    _handleClickSearch: function () {
        this.context.router.transitionTo('location');
    },

    render: function () {
        return (
            <div className="home">
                <div className="row-block">
                    <div className="center-align-block">
                        <div className="title">
                            <span>Что желаете&#63;</span>
                        </div>
                        <TodoDropdown/>
                    </div>
                </div>

                <div className="row-block">
                    <div className="center-align-block">
                        <div className="title">
                            <span>С кем&#63;</span>
                        </div>
                        <PeopleDropdown/>
                    </div>
                </div>
                <div className="center-align-block">
                    <button
                        className="btn btn-success"
                        onClick={this._handleClickSearch}>Найти</button>
                </div>
            </div>
        );
    }

});

module.exports = Home;
