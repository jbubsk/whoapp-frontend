var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    MenuContent;

MenuContent = React.createClass({
    getInitialState: function () {
        return {
            selectedKey: 'home'
        }
    },
    getMenuItems: function () {
        if (!this.menuItems) {
            this.menuItems = [
                {href: 'home', text: 'Домой', src: 'img/house158.png'},
                {href: 'settings', text: 'Настройки', src: 'img/settings21.png'},
                {href: 'logout', text: 'Выйти', src: 'img/exit21.png'}
            ];
        }
        return this.menuItems;
    },

    _handleMenuItemClick: function (item) {
        this.setState({
            selectedKey: item.href
        });
        location.hash = item.href;
        setTimeout(this.props.onItemClick, 50);
    },

    render: function () {
        var childMenuItems = [],
            menuItems = this.getMenuItems(),
            self = this;

        menuItems.forEach(function (item, index) {
            var classNames = self.state.selectedKey === item.href ? 'menu-row menu-item-selected' : 'menu-row';
            if (index + 1 < menuItems.length && self.state.selectedKey === menuItems[index + 1].href) {
                classNames = 'menu-row before-selected';
            }

            childMenuItems.push(
                <div className={classNames}
                    onClick={self._handleMenuItemClick.bind(self, item)}
                    key={item.href}>

                    <div className="menu-item-icon-container fl">
                        <div className="menu-item-icon">
                            <img src={item.src}></img>
                        </div>
                    </div>

                    <div className="menu-item-text fl">
                        {item.text}
                    </div>
                    <div className="clear"/>
                </div>
            )
        });

        return (
            <div id="menu">
                <div className="menu-header"/>
                <div className="menu-list">
                    {childMenuItems}
                </div>
            </div>
        )
    }
});

module.exports = MenuContent;
