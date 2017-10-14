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
     * Bind a given functions to a given event.
     * @param {String} eventName
     * @param {Functions} handler 
     */
    bind(eventName, handler) {
        if (typeof handler === 'function') {
            if (this.eventDispatcherMap[eventName]) {
                this.eventDispatcherMap[eventName].push(handler);
            } else {
                this.eventDispatcherMap[eventName] = [handler];
            }
        }
    }

    /**
     *  Trigger a given function
     *  @param {String} eventName 
     */
    trigger(eventName) {
        if (this.eventDispatcherMap[eventName]) {
            for (let i = 0; i < this.eventDispatcherMap[eventName].length; i++) {
                try {
                    this.eventDispatcherMap[eventName][i]();
                } catch (e) {}
            }
        }
    }

    /**
     *  unbind a given functions from given event
     *  @param {String} eventName 
     *  @param {Functions} handler
     */
    unbind(eventName, handler) {
        if (this.eventDispatcherMap[eventName]) {
            for (let i = 0; i < this.eventDispatcherMap[eventName].length; i++) {
                if (this.eventDispatcherMap[eventName][i] === handler) {
                    this.eventDispatcherMap[eventName].splice(i, 1);
                }
            }
        }
    }

    /**
     *  unbind all functions
     */
    unbindAll() {
        this.eventDispatcherMap = {};
    }

}

module.exports = EventDispatcher;