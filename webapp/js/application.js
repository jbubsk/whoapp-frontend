var Login = require('./components/Login');

Whoapp = {
    run: function () {
        React.render(
            <Login/>,
            //document.getElementById('app')
            document.body
        );
    }
};