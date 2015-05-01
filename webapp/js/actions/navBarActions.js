var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

module.exports = assign(new EventEmitter(), {
    EVENTS: {
        login: 'login',
        register: 'register',
        enableAction: 'enableAction'
    }
});