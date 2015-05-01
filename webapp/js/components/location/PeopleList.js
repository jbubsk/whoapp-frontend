var React = require('react'),
    PeopleList;

PeopleList = React.createClass({
    getInitialState: function () {
        return {
            people: [
                {
                    name: 'Вася'
                }
            ]
        }
    },
    render: function () {
        return (
            <div className="people-list">
            </div>
        )
    }
});

module.exports = PeopleList;