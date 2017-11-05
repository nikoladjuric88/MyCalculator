"use strict";

import { Assert } from './assert.js';

/**
 *  EventDispatcher handles the functions.
 */
export class EventDispatcher {

    /**
     *  Constructor.  
     */
    constructor() {
        this._eventDispatcherMap = {};
    }

    /**
     * Binds a given functions to a given event.
     * @param {String} eventName.
     * @param {Function} handler. 
     */
    bind(eventName, handler) {

        Assert.isString(eventName);
        Assert.isFunction(handler);

        if (this._eventDispatcherMap[eventName]) {
            this._eventDispatcherMap[eventName].push(handler);
        } else {
            this._eventDispatcherMap[eventName] = [handler];
        }
    }

    /**
     *  Triggers a given event.
     *  @param {String} eventName. 
     */
    trigger(eventName, num) {

        Assert.isString(eventName);
        Assert.isNumber(num);

        if (this._eventDispatcherMap[eventName]) {
            for (let i = 0; i < this._eventDispatcherMap[eventName].length; i++) {
                try {
                    this._eventDispatcherMap[eventName][i](num);
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

        Assert.isString(eventName);
        Assert.isFunction(handler);

        if (this._eventDispatcherMap[eventName]) {
            for (let i = 0; i < this._eventDispatcherMap[eventName].length; i++) {
                if (this._eventDispatcherMap[eventName][i] === handler) {
                    this._eventDispatcherMap[eventName].splice(i, 1);
                }
            }
        }
    }

    /**
     *  Unbinds all functions
     */
    unbindAll() {
        this._eventDispatcherMap = {};
    }
}