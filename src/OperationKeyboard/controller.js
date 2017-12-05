"use strict";

import { EventDispatcher } from '../eventDispatcher.js';
import viewTemplate from './view.hbs';
import stringToDom from 'string-to-dom';

export const OperationKeyboardEvents = {
    OPERATION_SELECTED: 'operationSelected'
};

export const Operations = {
    ADDITION: '+',
    SUBSTRACTION: '-',
    DIVISION: '/',
    MULTIPLICATION: 'x',
    EQUALLS: '='
};

export class OperationKeyboard extends EventDispatcher {

    /**
     *  Constructor.  
     */
    constructor() {
        super();
        this._bindOpsEvents();
    }
    /**
     * Binds event listeners to operation buttons.
     */
    _bindOpsEvents() {
        let viewString = viewTemplate();
        this.view = stringToDom(viewString);
        let operationButtons = this.view.querySelectorAll('.operation');
        let operation = null;
        for (let i = 0; i < operationButtons.length; i++) {
            operationButtons[i].addEventListener("click", (event) => {
                for(let j in Operations) {
                    if(Operations[j] === event.target.textContent) {
                        operation = Operations[j];
                    }
                }
                this.trigger(OperationKeyboardEvents.OPERATION_SELECTED, operation);
            })
        }
    }
}