"use strict";

import { Screen } from './screen.js';
import { Precedence } from './precedence.js';
import { Memory } from './memory.js';
import { DigitKeyboard } from './digitKeyboard.js';

let precedence = new Precedence();
let precedenceOps = document.getElementById('precedenceOps');
let precedenceOn = false;
precedenceOps.onclick = function() {
    document.getElementById('precedenceOps').style.backgroundColor = '#848484';
    precedenceOn = true;
}

let result = 0;
let screen = new Screen(document.getElementById('screen'));
let buttons = document.querySelector('.allButtons');

let digitKeyboard = new DigitKeyboard();
digitKeyboard.bind('DigitKeyboard.KEY_PRESSED', digit => { screen.addDigit(digit); });


let operationButtons = buttons.querySelectorAll('.operation');

for (let i = 0; i < operationButtons.length; i++) {
    var isInitialAction = true;
    var prevOperation;

    operationButtons[i].onclick = function() {
        screen.resetOnNextInput();
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
                screen.number = precedence.calculateResult();
            }
        } else {
            screen.number = result;
        }
        prevOperation = this.innerHTML;
    }
}



let memory = new Memory();
let memoryPlus = document.getElementById('memoryPlus');
memoryPlus.onclick = function() {
    memory.plus(screen.number);
}

let memoryMinus = document.getElementById('memoryMinus');
memoryMinus.onclick = function() {
    memory.minus(screen.number);
}

let memoryRecall = document.getElementById('memoryRecall');
memoryRecall.onclick = function() {
    let currNumber = screen.number;
    let callMemory = memory.number;
    if (callMemory === 0) {
        screen.number = currNumber;
    } else {
        screen.number = callMemory;
    }
}

let memoryClear = document.getElementById('memoryClear');
memoryClear.onclick = function() {
    memory.clear();
}