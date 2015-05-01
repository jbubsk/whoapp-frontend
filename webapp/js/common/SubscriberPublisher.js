function SubscriberPublisher() {
    this._subscribers = {};
}

SubscriberPublisher.prototype.on = function (event, callback) {
    if (!this._subscribers[event]) {
        this._subscribers[event] = [];
    }
    this._subscribers[event].push(callback);
};

SubscriberPublisher.prototype.fire = function (event, param) {
    var length, i = 0,
        callbacks = this._subscribers[event];

    if (callbacks) {
        length = this._subscribers[event].length;
        for (i; i < length; i++) {
            callbacks[i](param);
        }
    } else {
        console.log('There is no subscribers for such event: ' + event);
    }
};

SubscriberPublisher.prototype.off = function (event) {
    delete this._subscribers[event];
};

module.exports = SubscriberPublisher;