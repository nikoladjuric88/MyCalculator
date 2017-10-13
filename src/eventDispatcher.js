"use strict";

class EventDispatcher {
    constructor() {
        this.eventDispatcherMap = {};
    }

    bind(eventName, handler) {
        if (typeof handler === 'function') {
            if (this.eventDispatcherMap[eventName]) {
                this.eventDispatcherMap[eventName].push(handler);
            } else {
                this.eventDispatcherMap[eventName] = [handler];
            }
        }
    }

    trigger(eventName) {
        if (this.eventDispatcherMap[eventName]) {
            for (var i = 0; i < this.eventDispatcherMap[eventName].length; i++) {
                try {
                    this.eventDispatcherMap[eventName][i]();
                } catch (e) {

                }
            }
        }
    }

    unbind(eventName, handler) {
        if (this.eventDispatcherMap[eventName]) {
            for (var i = 0; i < this.eventDispatcherMap[eventName].length; i++) {
                if (this.eventDispatcherMap[eventName][i] === handler) {
                    this.eventDispatcherMap[eventName].splice(i, 1);
                }
            }
        }
    }

    unbindAll() {
        this.eventDispatcherMap = {};
    }

}

module.exports = EventDispatcher;