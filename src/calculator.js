"use strict";

import { Screen } from './screen.js';
import { Precedence } from './precedence.js';
import { Memory } from './memory.js';
import { DigitKeyboard } from './DigitKeyboard/controller.js';
import { DigitKeyboardEvents } from './DigitKeyboard/controller.js';

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

let memo = new Memory();
let memoryPlus = document.getElementById('memoryPlus');
memoryPlus.onclick = function() {
    let currNumber = screen.number;
    memo.plus(currNumber);
}

let memoryMinus = document.getElementById('memoryMinus');
memoryMinus.onclick = function() {
    let currNumber = screen.number;
    memo.minus(currNumber);
}

let memoryRecall = document.getElementById('memoryRecall');
memoryRecall.onclick = function() {
    let currNumber = screen.number;
    let callMemory = memo.number;
    if (callMemory === 0) {
        screen.number = currNumber;
    } else {
        screen.number = callMemory;
    }
}

let memoryClear = document.getElementById('memoryClear');
memoryClear.onclick = function() {
    memo.clear();
}