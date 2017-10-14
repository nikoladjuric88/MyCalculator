"use strict";

/**
 *  EventDispatcher handles the functions.
 */
class EventDispatcher {

    /**
     *  Constructor keep all functions.   
     */
    constructor() {
        this.eventDispatcherMap = {};
    }

    /**
     * Bind entries functions in object.
     * @param {String}  eventName
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
     *  @param  {String} eventName 
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
     *  unbind remove given function
     *  @param  {String} eventName 
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
     *  unbindAll remove all functions
     */
    unbindAll() {
        this.eventDispatcherMap = {};
    }

}

module.exports = EventDispatcher;