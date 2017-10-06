"use strict";

function EventDispatcher() {
    this.eventDispatcherMap = {};
};


EventDispatcher.prototype.bind = function(eventName, handler) {
    if (typeof handler === 'function') {
        if (this.eventDispatcherMap[eventName]) {
            this.eventDispatcherMap[eventName].push(handler);
        } else {
            this.eventDispatcherMap[eventName] = [handler];
        }
    }
}

EventDispatcher.prototype.trigger = function(eventName) {
    if (this.eventDispatcherMap[eventName]) {
        try {
            for (var i = 0; i < this.eventDispatcherMap[eventName].length; i++) {
                this.eventDispatcherMap[eventName][i]();
            }
        } catch (e) {
            this.eventDispatcherMap[eventName].splice(i, 1);
            for (var j = 0; j < this.eventDispatcherMap[eventName].length; j++) {
                if (j >= i) {
                    this.eventDispatcherMap[eventName][j]();
                }
            }
        }
    }
};

EventDispatcher.prototype.unbind = function(eventName, handler) {
    if (this.eventDispatcherMap[eventName]) {
        for (var i = 0; i < this.eventDispatcherMap[eventName].length; i++) {
            if (this.eventDispatcherMap[eventName][i] === handler) {
                this.eventDispatcherMap[eventName].splice(i, 1);
            }
        }
    }
}

EventDispatcher.prototype.unbindAll = function() {
    this.eventDispatcherMap = {};
}

module.exports = EventDispatcher;