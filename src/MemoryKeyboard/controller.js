import { EventDispatcher } from '../eventDispatcher.js';
import viewTemplate from './view.hbs';
import stringToDom from 'string-to-dom';

export const MemoryButtons = {
    PLUS: 'M+',
    MINUS: 'M-',
    RECALL: 'MR',
    CLEAR: 'MC'
};

/**
 * MemoryKeyboard works with given result in memory.
 */
export class MemoryKeyboard extends EventDispatcher {

    /**
     *  Constructor.  
     */
    constructor() {
        super();
        let viewString = viewTemplate();
        this.view = stringToDom(viewString);
        this._num = 0;
        this._bindMemoryEvents();
    }

    /**
     *  Adds a number to the result in the memory.
     *  @param {Number} value.
     */
    memoryPlus(value) {
        this._num += value;
    }

    /**
     *  Subtracts a number from the result in the memory.
     *  @param {Number} value.
     */
    memoryMinus(value) {
        this._num -= value;
    }

    /**
     * Returns the result from the memory.
     */
    memoryRecall() {
        return this._num;
    }

    /**
     * Resets the result to zero.
     */
    memoryClear() {
        this._num = 0;
    }

    /**
     * Binds event listeners to memory buttons.
     */
    _bindMemoryEvents() {
        let memoBtns = this.view.querySelectorAll('.memo');

        for (let i = 0; i < memoBtns.length; i++) {
            memoBtns[i].addEventListener('click', (event) => {
                for (let btn in MemoryButtons) {
                    if (MemoryButtons[btn] === event.target.textContent) {
                        this.trigger(MemoryButtons[btn])
                    }
                }
            })
        }
    }
}