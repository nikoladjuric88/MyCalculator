"use strict";

import { Screen } from './screen.js';
import { Precedence } from './precedence.js';
import { DigitKeyboard } from './DigitKeyboard/controller.js';
import { DigitKeyboardEvents } from './DigitKeyboard/controller.js';
import { MemoryKeyboard } from './MemoryKeyboard/controller.js';
import { MemoryButtons } from './MemoryKeyboard/controller.js';

let precedence = new Precedence();
let precedenceOps = document.getElementById('precedenceOps');
let precedenceOn = false;
precedenceOps.onclick = function() {
    document.getElementById('precedenceOps').style.backgroundColor = '#848484';
    precedenceOn = true;
}

let result = 0;
let screen = new Screen(document.getElementById('screen'));
let buttons = document.querySelector('#allButtons');

let digitKeyboard = new DigitKeyboard();
document.body.append(digitKeyboard.view);
digitKeyboard.bind(DigitKeyboardEvents.KEY_PRESSED, digit => { screen.addDigit(digit); });


let operationButtons = buttons.querySelectorAll('.operation');

for (let i = 0; i < operationButtons.length; i++) {
    var isInitialAction = true;
    var prevOperation;

    operationButtons[i].onclick = function() {
        let currNumber = screen.number;
        if (isInitialAction) {
            result = currNumber;
            isInitialAction = false;
        } else {
            switch (prevOperation) {

                case '+':
                    result = result + currNumber;
                    break;

                case '-':
                    result = result - currNumber;
                    break;

                case 'x':
                    result = result * currNumber;
                    break;

                case '/':
                    result = result / currNumber;
                    break;
                case '=':
                    result = currNumber;
                    break;
            }
        }
        if (precedenceOn) {
            let currOperation = this.innerHTML;
            screen.number = currNumber;
            precedence.addNumber(currNumber);
            if (currOperation !== '=') {
                precedence.addOperation(currOperation);
            } else {
                let outcome = precedence.calculateResult();
                screen.number = outcome;
            }
        } else {
            screen.number = result;
        }
        prevOperation = this.innerHTML;
        screen.resetOnNextInput();
    }
}

let memoryKeyboard = new MemoryKeyboard();
document.body.append(memoryKeyboard.view);
memoryKeyboard.bind(MemoryButtons.PLUS, () => { memoryKeyboard.memoryPlus(screen.number) });
memoryKeyboard.bind(MemoryButtons.MINUS, () => { memoryKeyboard.memoryMinus(screen.number) });
memoryKeyboard.bind(MemoryButtons.RECALL, () => { screen.number = memoryKeyboard.memoryRecall() });
memoryKeyboard.bind(MemoryButtons.CLEAR, () => { memoryKeyboard.memoryClear() });