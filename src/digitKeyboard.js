import { EventDispatcher } from './eventDispatcher.js';

export class DigitKeyboard extends EventDispatcher {
    constructor() {
        super();
        this.bindEvents();
    }
    bindEvents() {
        let buttons = document.querySelector('.allButtons');
        let numberButtons = buttons.querySelectorAll('.number');

        for (let i = 0; i < numberButtons.length; i++) {
            let self = this;
            numberButtons[i].onclick = function() {
                let buttonDigit = this.innerHTML;
                self.trigger('DigitKeyboard.KEY_PRESSED', buttonDigit);
            }
        };
    }
}
