"use strict";

/**
 *  Screen handle calculator screen  
 *  Constructor.
 *  @param {string} element
 */
function Screen(element) {
    this.element = element;
    this.reset = false;
}

/**
 * Allow a new entry 
 */
Screen.prototype.resetOnNextInput = function() {
    this.reset = true;
}

Screen.prototype.resetOfNextInput = function() {
    this.reset = false;
}

/**
 * Set given number on the screen 
 * @param {number} number
 */
Screen.prototype.setNumber = function(number) {
    this.element.value = number;
}

/**
 * Get current number from the screen 
 */
Screen.prototype.getNumber = function() {
    return this.element.value;
};

/**
 * Add new number on the screen 
 * @param {number} digit
 */
Screen.prototype.addDigit = function(digit) {

    if (this.reset === true) {
        this.element.value = digit;
        this.reset = false;
    } else {
        this.element.value += digit;
    }
}

module.exports = Screen;