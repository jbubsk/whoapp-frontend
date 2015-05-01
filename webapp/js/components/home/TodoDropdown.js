var React = require('react'),
    TodoDropdown,
    optionsMock = [
        'Бизнес ланч',
        'Играть в боулинг',
        'Пойти на выставку',
        'Курить кальян'
    ];

TodoDropdown = React.createClass({
    getInitialState: function () {
        return {options: optionsMock};
    },

    getTodoList: function () {
        this.setState({options: []});
    },

    _handleSelect: function () {
        React.findDOMNode(this.refs.todo).value;
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
                    ref="todo">
                    {options}
                </select>
            </div>
        )
    }
});

module.exports = TodoDropdown;