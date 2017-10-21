"use strict";

/**
 *  Screen handles calculator screen.  
 */
export class Screen {

    /**
     *  Constructor.  
     *  @param {String} element.
     */
    constructor(element) {
        this._element = element;
        this._reset = false;
    }

    /**
     * Allows a new entry. 
     */
    resetOnNextInput() {
        this._reset = true;
    }

    /**
     * Sets the given number on the screen 
     * @param {Number} number
     */
    set number(number) {
        this._element.value = number;
    }

    /**
     * Gets the current number from the screen. 
     */
    get number() {
        return this._element.value;
    }

    /**
     * Adds new number on the screen. 
     * @param {Number} digit.
     */
    addDigit(digit) {
        if (this._reset) {
            this._element.value = digit;
            this._reset = false;
        } else {
            this._element.value += digit;
        }
    }
}

