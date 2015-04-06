var Layout = require('./components/Layout');

Whoapp = {
    run: function () {
        React.render(
            <Layout/>,
            document.body
        );
    }
};