var React = require('react'),
    PeopleDropdown,
    optionsMock = [
        'Вася',
        'Коля',
        'Оля',
        'Саша'
    ];

PeopleDropdown = React.createClass({
    getInitialState: function () {
        return {options: optionsMock};
    },

    getPeopleList: function () {
        this.setState({options: []});
    },

    _handleSelect: function () {
        React.findDOMNode(this.refs.person).value;
    },

    render: function () {
        var options = this.state.options.map(function (item) {
            return (
                <option key={item} value={item}>{item}</option>
            )
        });
        return (
            <div className="dropdown">
                <select
                    className="form-control"
                    onChange={this._handleSelect}
                    ref="person">
                    {options}
                </select>
            </div>
        )
    }
});

module.exports = PeopleDropdown;