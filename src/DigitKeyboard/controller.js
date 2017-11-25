"use strict";

import { EventDispatcher } from '../eventDispatcher.js';
import viewTemplate from './view.hbs';
import stringToDom from 'string-to-dom';

export const DigitKeyboardEvents = {
    KEY_PRESSED: 'keyPressed',
};

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
        let viewString = viewTemplate();
        this.view = stringToDom(viewString);
        let numberButtons = this.view.querySelectorAll('.number');
    
        for (let i = 0; i < numberButtons.length; i++) {
            numberButtons[i].addEventListener("click", event => {
                let buttonDigit = Number(event.target.textContent);
                this.trigger(DigitKeyboardEvents.KEY_PRESSED, buttonDigit)
            });
        }
    } 
}