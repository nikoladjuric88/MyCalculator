"use strict";

/**
 *  Screen handles calculator screen.  
 *  Constructor.
 *  @param {String} element.
 */
function Screen(element) {
    this.element = element;
    this.reset = false;
}

/**
 * Allows a new entry. 
 */
Screen.prototype.resetOnNextInput = function() {
    this.reset = true;
}

Screen.prototype.resetOfNextInput = function() {
    this.reset = false;
}

/**
 * Sets the given number on the screen 
 * @param {Number} number
 */
Screen.prototype.setNumber = function(number) {
    this.element.value = number;
}

/**
 * Gets the current number from the screen. 
 */
Screen.prototype.getNumber = function() {
    return this.element.value;
};

/**
 * Adds new number on the screen. 
 * @param {Number} digit.
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