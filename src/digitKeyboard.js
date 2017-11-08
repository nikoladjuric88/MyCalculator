"use strict";

import { EventDispatcher } from './eventDispatcher.js';

/**
 *  DigitKeyboard sets the digits on the screen.
 */
export class DigitKeyboard extends EventDispatcher {

    /**
     *  Constructor.  
     */
    constructor() {
        super();
        this._bindEvents();
    }

    /**
     * Triggers binded event with a given value.
     */
    _bindEvents() {
        let buttons = document.querySelector('.allButtons');
        let numberButtons = buttons.querySelectorAll('.number');

        for (let i = 0; i < numberButtons.length; i++) {
            let self = this;
            numberButtons[i].addEventListener("click", function() {
                let buttonDigit = this.innerHTML;
                self.trigger('DigitKeyboard.KEY_PRESSED', buttonDigit);
            })         
        }
    }
}