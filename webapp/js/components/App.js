var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute,
    Session = require('../services/session'),
    routes,
    App,

/* app modules */

    Login = require('../components/login/LoginContent'),
    Land = require('../components/Land'),
    Registration = require('../components/registration/RegistrationContent'),
    Logout = require('../components/Logout'),
    Location = require('../components/location/LocationContent'),
    Home = require('../components/home/HomeContent'),
    Settings = require('../components/Settings'),
    MenuContent = require('../components/MenuContent'),
    PageContent = require('../components/PageContent'),
    Loader = require('../components/Loader');

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
                <Loader/>
                <div className="clear"/>
            </div>
        )
    }
});

routes = (
    <Route handler={App}>
        <Route name="login" handler={Login}/>
        <Route name="registration" handler={Registration}/>
        <Route name="logout" handler={Logout}/>
        <Route name="settings" handler={Settings}/>
        <Route name="home" handler={Home}/>
        <Route name="location" handler={Location}/>
        <DefaultRoute handler={Land}/>
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
