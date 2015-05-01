var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

module.exports = assign(new EventEmitter(), {
    toggle: function (isActive) {
        this.emit('toggle', isActive);
    }
});