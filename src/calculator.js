"use strict";

import { DigitKeyboard } from './DigitKeyboard/controller.js';
import { DigitKeyboardEvents } from './DigitKeyboard/controller.js';
import { OperationKeyboard } from './OperationKeyboard/controller.js';
import { OperationKeyboardEvents } from './OperationKeyboard/controller.js';
import { Operations } from './OperationKeyboard/controller.js';
import { MemoryKeyboard } from './MemoryKeyboard/controller.js';
import { MemoryButtons } from './MemoryKeyboard/controller.js';
import { Screen } from './Screen/controller.js';

let screen = new Screen();
document.getElementById("calculatorBody").append(screen.view);

let digitKeyboard = new DigitKeyboard();
document.getElementById("calculatorBody").append(digitKeyboard.view);
digitKeyboard.bind(DigitKeyboardEvents.KEY_PRESSED, digit => { screen.addDigit(digit); });

let operationKeyboard = new OperationKeyboard();
document.getElementById("calculatorBody").append(operationKeyboard.view);

operationKeyboard.bind(OperationKeyboardEvents.OPERATION_SELECTED, ops => {
    screen.resetOnNextInput();
    calculate(ops);
});

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
document.getElementById("calculatorBody").append(memoryKeyboard.view);
memoryKeyboard.bind(MemoryButtons.PLUS, () => { memoryKeyboard.memoryPlus(screen.number) });
memoryKeyboard.bind(MemoryButtons.MINUS, () => { memoryKeyboard.memoryMinus(screen.number) });
memoryKeyboard.bind(MemoryButtons.RECALL, () => { screen.number = memoryKeyboard.memoryRecall() });
memoryKeyboard.bind(MemoryButtons.CLEAR, () => { memoryKeyboard.memoryClear() });