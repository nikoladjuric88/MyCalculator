"use strict";

import { EventDispatcher } from '../eventDispatcher.js';
import viewTemplate from './view.hbs';
import stringToDom from 'string-to-dom';

export const OperationKeyboardEvents = {
    GET_OPERATION: 'getOperation',
    RESET_ON_NEXT_INPUT: 'resetOnNextInput',
    SET_RESULT: 'setResult'
};

export class OperationKeyboard extends EventDispatcher {

    /**
     *  Constructor.  
     */
    constructor() {
        super();
        this._bindOpsEvents();
        this.operation = null;
    }
    /**
     * Binds event listeners to operation buttons.
     */
    _bindOpsEvents() {
        let viewString = viewTemplate();
        this.view = stringToDom(viewString);
        let operationButtons = this.view.querySelectorAll('.operation');
        for (let i = 0; i < operationButtons.length; i++) {
            operationButtons[i].addEventListener("click", (event) => {
                this.trigger(OperationKeyboardEvents.RESET_ON_NEXT_INPUT)
                this.operation = event.target.textContent;
                this.trigger(OperationKeyboardEvents.GET_OPERATION, this.operation);
            })
        }
    }
}