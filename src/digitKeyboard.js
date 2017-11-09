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
     * Binds event listeners to digit buttons.
     */
    _bindEvents() {
        let buttons = document.querySelector('.allButtons');
        let numberButtons = buttons.querySelectorAll('.number');

        for (let i = 0; i < numberButtons.length; i++) {
            let self = this;
            numberButtons[i].addEventListener("click", function() {
                let buttonDigit = event.target.textContent;
                self.trigger('DigitKeyboard.KEY_PRESSED').bind(this, buttonDigit)();
            })
        }
    }
}
