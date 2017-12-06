import { EventDispatcher } from '../eventDispatcher.js';
import viewTemplate from './view.hbs';
import stringToDom from 'string-to-dom';

export const MemoryButtons = {
    PLUS: 'plus',
    MINUS: 'minus',
    RECALL: 'recall',
    CLEAR: 'clear'
};

export class MemoryKeyboard extends EventDispatcher {

    /**
     *  Constructor.  
     */
    constructor() {
        super();
        let viewString = viewTemplate();
        this.view = stringToDom(viewString);
        this._num = 0;
        this._bindEventMemoryPlus();
        this._bindEventMemoryMinus();
        this._bindEventMemoryRecall();
        this._bindEventmemoryClear();
    }

    memoryPlus(value) {
        this._num += value;
    }

    _bindEventMemoryPlus() {
        let memoPlusBtn = this.view.querySelector('#memoryPlus');
        memoPlusBtn.addEventListener('click', (e) => {
            this.trigger(MemoryButtons.PLUS)
        });
    }

    memoryMinus(value) {
        this._num -= value;
    }

    _bindEventMemoryMinus() {
        let memoMinusBtn = this.view.querySelector('#memoryMinus');
        memoMinusBtn.addEventListener('click', (e) => {
            this.trigger(MemoryButtons.MINUS)
        });
    }

    memoryRecall() {
        return this._num;
    }

    _bindEventMemoryRecall() {
        let memoryRecallBtn = this.view.querySelector('#memoryRecall');
        memoryRecallBtn.addEventListener('click', (e) => {
            this.trigger(MemoryButtons.RECALL)
        });
    }

    memoryClear() {
        this._num = 0;
    }

    _bindEventmemoryClear() {
        let memoryClearBtn = this.view.querySelector('#memoryClear');
        memoryClearBtn.addEventListener('click', (e) => {
            this.trigger(MemoryButtons.CLEAR)
        });
    }
}