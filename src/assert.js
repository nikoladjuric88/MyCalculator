"use strict";

/**
 *  Assert checks the parameters.
 */
export class Assert {

    /**
     * Checks if this parameter is a string.
     * @param {String} param. 
     */
    static isString(param) {
        if (typeof param !== 'string') {
            throw new TypeError("Parameter should be a string not a " + typeof param);
        }
    }

    /**
     * Checks if this parameter is a function.
     * @param {Function} param. 
     */
    static isFunction(param) {
        if (typeof param !== 'function') {
            throw new TypeError("Parameter should be a function not a " + typeof param);
        }
    }

    /**
     * Checks is this parameter is a number.
     * @param {Number} param. 
     */
    static isNumber(param) {
        if (typeof param !== 'number') {
            throw new TypeError("Parameter should be a number not a " + typeof param);
        }
    }
};