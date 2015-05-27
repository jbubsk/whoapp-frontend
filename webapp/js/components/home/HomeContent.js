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
                <TodoDropdown/>
                <div className="home-wrapper">
                    <a className="tab">С кем</a>
                    <a className="tab">Куда</a>
                </div>
            </div>
        );
    }

});

module.exports = Home;
