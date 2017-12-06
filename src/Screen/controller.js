import viewTemplate from './view.hbs';
import stringToDom from 'string-to-dom';

export class Screen {
    constructor() {
        let viewString = viewTemplate();
        this.view = stringToDom(viewString);
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
        this.view.value = number;
    }

    /**
     * Gets the current number from the screen. 
     */
    get number() {
        return Number(this.view.value);
    }

    /**
     * Adds new number on the screen. 
     * @param {Number} digit.
     */
    addDigit(digit) {
        if (this._reset) {
            this.view.value = digit;
            this._reset = false;
        } else {
            this.view.value += digit;
        }
    }
}