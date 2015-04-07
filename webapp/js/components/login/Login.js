var Form = require('./Form');

var Login = React.createClass({
    render: function () {
        return (
            <div className="padding">
                <div className="page-title">
                    <span>Привет</span>
                </div>
                <Form/>
            </div>
        );
    }
});

module.exports = Login;