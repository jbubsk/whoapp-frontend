var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute,
    Session = require('../services/session'),
    routes,
    App,

/* app modules */

    Login = require('../components/login/Login'),
    Logout = require('../components/Logout'),
    Home = require('../components/Home'),
    Settings = require('../components/Settings'),
    MenuContent = require('../components/MenuContent'),
    PageContent = require('../components/PageContent');

App = React.createClass({
    getInitialState: function () {
        return {
            isMenuOpened: true
        }
    },

    _onMenuClick: function () {
        var isMenuOpened = !this.state.isMenuOpened;

        this.setState({
            isMenuOpened: isMenuOpened
        });
    },

    render: function () {
        return (
            <div id="container">
                <MenuContent
                    onItemClick={this._onMenuClick}/>
                <PageContent
                    onMenuClick={this._onMenuClick}
                    isMenuOpened={this.state.isMenuOpened}/>
                <div className="clear"/>
            </div>
        )
    }
});

routes = (
    <Route handler={App}>
        <Route name="login" handler={Login}/>
        <Route name="logout" handler={Logout}/>
        <Route name="settings" handler={Settings}/>
        <Route name="home" handler={Home}/>
        <DefaultRoute handler={Login}/>
    </Route>
);

module.exports = {
    run: function () {
        Session.initialize();
        Router.run(routes, function (Handler) {
            React.render(<Handler/>, document.body)
        });
    }
};
