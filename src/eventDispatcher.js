"use strict";

/**
 *  EventDispatcher handles all functions.
 */
class EventDispatcher {

    /**
     *  Keep all functions.
     *  @param {Object}     
     */
    constructor() {
        this.eventDispatcherMap = {};
    }

    /**
     * Entries functions in object.
     * @param {String}  event name
     * @param {Functions}  handler 
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
     *  Trigger given function
     *  @param  {String} event name 
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
     *  Remove given function
     *  @param  {String} event name 
     *  @param  {Functions} handler
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
     *  Remove all functions
     */
    unbindAll() {
        this.eventDispatcherMap = {};
    }

}

module.exports = EventDispatcher;