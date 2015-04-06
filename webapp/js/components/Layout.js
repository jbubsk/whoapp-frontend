var Login = require('../components/Login');

var Layout = React.createClass({
    render: function () {
        return (
            <div id="container">
                <div id="header"></div>
                <div id="content">
                    <div id="page_host">
                        <Login/>
                    </div>
                    <div className="menu"></div>
                </div>
            </div>
        )
    }
});

module.exports = Layout;