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

/**
 *  OperationKeyboard determinates the operation when it's clicked.
 */
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
        let currOperation = null;
        for (let i = 0; i < operationButtons.length; i++) {
            operationButtons[i].addEventListener("click", (event) => {
                for (let operation in Operations) {
                    if (Operations[operation] === event.target.textContent) {
                        currOperation = Operations[operation];
                    }
                }
                this.trigger(OperationKeyboardEvents.OPERATION_SELECTED, currOperation);
            })
        }
    }
}