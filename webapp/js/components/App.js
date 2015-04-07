var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute,
    routes,
    App,

/* app modules */

    Login = require('../components/login/Login'),
    Logout = require('../components/Logout'),
    Settings = require('../components/Settings'),
    Header = require('../components/Header'),
    Menu = require('../components/Menu');

App = React.createClass({
    render: function () {
        return (
            <div id="container">
                <Header/>
                <div id="content">
                    <div id="page_host">
                        <RouteHandler/>
                    </div>
                </div>
                <Menu/>
            </div>
        )
    }
});

routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" handler={Login}/>
        <Route name="logout" handler={Logout}/>
        <Route name="settings" handler={Settings}/>
        <DefaultRoute handler={Login}/>
    </Route>
);

module.exports = {
    run: function () {
        Router.run(routes, function (Handler) {
            React.render(<Handler/>, document.body)
        });
    }
};