"use strict";

import { Screen } from './screen.js';
import { Precedence } from './precedence.js';
import { DigitKeyboard } from './DigitKeyboard/controller.js';
import { DigitKeyboardEvents } from './DigitKeyboard/controller.js';
import { OperationKeyboard } from './OperationKeyboard/controller.js';
import { OperationKeyboardEvents } from './OperationKeyboard/controller.js';
import { Operations } from './OperationKeyboard/controller.js';
import { MemoryKeyboard } from './MemoryKeyboard/controller.js';
import { MemoryButtons } from './MemoryKeyboard/controller.js';

let precedence = new Precedence();
let precedenceOps = document.getElementById('precedenceOps');
let precedenceOn = false;
precedenceOps.onclick = function() {
    document.getElementById('precedenceOps').style.backgroundColor = '#848484';
    precedenceOn = true;
}

let digitKeyboard = new DigitKeyboard();
document.body.append(digitKeyboard.view);
digitKeyboard.bind(DigitKeyboardEvents.KEY_PRESSED, digit => { screen.addDigit(digit); });

let operationKeyboard = new OperationKeyboard();
document.body.append(operationKeyboard.view);

operationKeyboard.bind(OperationKeyboardEvents.OPERATION_SELECTED, ops => {
    screen.resetOnNextInput();
    calculate(ops);
});

let screen = new Screen(document.getElementById('screen'));
let prevOperation;
let result = 0;
let isInitialAction = true;

let calculate = ops => {
    let currNumber = screen.number;
    if (isInitialAction) {
        result = currNumber;
        isInitialAction = false;
    } else {
        switch (prevOperation) {
            case Operations.ADDITION:
                result = result + currNumber;
                break;
            case Operations.SUBSTRACTION:
                result = result - currNumber;
                break;
            case Operations.MULTIPLICATION:
                result = result * currNumber;
                break;
            case Operations.DIVISION:
                result = result / currNumber;
                break;
            case Operations.EQUALLS:
                result = currNumber;
                break;
        }
    }
    screen.number = result;
    prevOperation = ops;
}

let memoryKeyboard = new MemoryKeyboard();
document.body.append(memoryKeyboard.view);
memoryKeyboard.bind(MemoryButtons.PLUS, () => { memoryKeyboard.memoryPlus(screen.number) });
memoryKeyboard.bind(MemoryButtons.MINUS, () => { memoryKeyboard.memoryMinus(screen.number) });
memoryKeyboard.bind(MemoryButtons.RECALL, () => { screen.number = memoryKeyboard.memoryRecall() });
memoryKeyboard.bind(MemoryButtons.CLEAR, () => { memoryKeyboard.memoryClear() });