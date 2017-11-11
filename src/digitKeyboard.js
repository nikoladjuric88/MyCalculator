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
            numberButtons[i].addEventListener("click", event => {
                 let buttonDigit = Number(event.target.textContent);
                 this.trigger('DigitKeyboard.KEY_PRESSED', buttonDigit)
            }
                   
            );
        }
    }
}