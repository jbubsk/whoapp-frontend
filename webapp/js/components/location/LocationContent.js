var React = require('react'),
    PeopleList = require('./PeopleList'),
    LocationContent;

LocationContent = React.createClass({
    render: function () {
        return (
            <div className="location">
                <div className="row-block">
                    <div className="title left-align-block">Рядом</div>
                    <PeopleList/>
                </div>
                <div className="row-block">
                    <div className="title left-align-block">Москва</div>
                    <PeopleList/>
                </div>
            </div>
        )
    }
});

module.exports = LocationContent;