"use strict";

/**
 *  EventDispatcher handles the functions.
 */
class EventDispatcher {

    /**
     *  Constructor.  
     */
    constructor() {
        this.eventDispatcherMap = {};
    }

    /**
     * Binds a given functions to a given event.
     * @param {String} eventName.
     * @param {Function} handler. 
     */
    bind(eventName, handler) {

        if (typeof eventName !== 'string') {
            throw new TypeError("Parameter should be string");
        }
        if (typeof handler !== 'function') {
            throw new TypeError("Parameter should be function");
        }
        if (this.eventDispatcherMap[eventName]) {
            this.eventDispatcherMap[eventName].push(handler);
        } else {
            this.eventDispatcherMap[eventName] = [handler];
        }
    }

    /**
     *  Triggers a given event.
     *  @param {String} eventName. 
     */
    trigger(eventName) {
        if (typeof eventName !== 'string') {
            throw new TypeError("Parameter is not string");
        }
        if (this.eventDispatcherMap[eventName]) {
            for (let i = 0; i < this.eventDispatcherMap[eventName].length; i++) {
                try {
                    this.eventDispatcherMap[eventName][i]();
                } catch (e) {}
            }
        }
    }

    /**
     *  Unbinds a given functions from given event.
     *  @param {String} eventName. 
     *  @param {Function} handler.
     */
    unbind(eventName, handler) {
        if (typeof eventName !== 'string') {
            throw new TypeError("Parameter should be string");
        }
        if (typeof handler !== 'function') {
            throw new TypeError("Parameter should be function");
        }
        if (this.eventDispatcherMap[eventName]) {
            for (let i = 0; i < this.eventDispatcherMap[eventName].length; i++) {
                if (this.eventDispatcherMap[eventName][i] === handler) {
                    this.eventDispatcherMap[eventName].splice(i, 1);
                }
            }
        }
    }

    /**
     *  Unbinds all functions
     */
    unbindAll() {
        this.eventDispatcherMap = {};
    }

}

module.exports = EventDispatcher;