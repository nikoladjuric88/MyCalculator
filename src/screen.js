"use strict";

/**
 *  Screen handles calculator screen.  
 */
class Screen {

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
    setNumber(number) {
        this.element.value = number;
    }

    /**
     * Gets the current number from the screen. 
     */
    getNumber() {
        return this.element.value;
    }

    /**
     * Adds new number on the screen. 
     * @param {Number} digit.
     */
    addDigit(digit) {
        if (this.reset === true) {
            this.element.value = digit;
            this.reset = false;
        } else {
            this.element.value += digit;
        }
    }
}

module.exports = Screen;