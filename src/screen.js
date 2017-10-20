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
        this.element = element;
        this.reset = false;
    }

    /**
     * Allows a new entry. 
     */
    resetOnNextInput() {
        this.reset = true;
    }

    /**
     * Sets the given number on the screen 
     * @param {Number} number
     */
    set number(number) {
        this.element.value = number;
    }

    /**
     * Gets the current number from the screen. 
     */
    get number() {
        return Number(this.element.value);
    }

    /**
     * Adds new number on the screen. 
     * @param {Number} digit.
     */
    addDigit(digit) {
        if (this.reset) {
            this.element.value = digit;
            this.reset = false;
        } else {
            this.element.value += digit;
        }
    }
}

