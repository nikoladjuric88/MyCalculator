"use strict";

const Precedence = require('./precedence');
const Screen = require('./screen');
const Memory = require('./memory');

let precedence = new Precedence();
let precedenceOps = document.getElementById('precedenceOps');
precedenceOps.onclick = function() {
    document.getElementById('precedenceOps').style.backgroundColor = '#848484';
    precedence.precedenceOn();
}

let result = 0;
let screen = new Screen(document.getElementById('screen'));
let buttons = document.querySelector('.allButtons');
let numberButtons = buttons.querySelectorAll('.number');

for (let i = 0; i <= numberButtons.length - 1; i++) {
    numberButtons[i].onclick = function() {
        let buttonDigit = parseInt(this.innerHTML);
        screen.addDigit(buttonDigit);
    }
};

let operationButtons = buttons.querySelectorAll('.operation');

for (let i = 0; i < operationButtons.length; i++) {
    var isInitialAction = true;
    var prevOperation;

    operationButtons[i].onclick = function() {
        let currNumber = screen.getNumber();

        if (isInitialAction) {
            result = currNumber;
            isInitialAction = false;
        } else {
            switch (prevOperation) {
                case '+':
                    result = Number(result) + Number(currNumber);
                    break;

                case '-':
                    result = Number(result) - Number(currNumber);
                    break;

                case 'x':
                    result = Number(result) * Number(currNumber);
                    break;

                case '/':
                    result = Number(result) / Number(currNumber);
                    break;
                case '=':
                    result = currNumber;
                    break;
            }
        }
        if (precedence.turnOn === true) {
            let currOperation = this.innerHTML;
            screen.setNumber(currNumber);
            precedence.addNumber(currNumber);
            if (currOperation !== '=') {
                precedence.addOperation(currOperation);
            } else {
                let outcome = precedence.calculateResult();
                screen.setNumber(outcome);
            }
        } else {
            screen.setNumber(result);
        }
        prevOperation = this.innerHTML;
        screen.resetOnNextInput();
    }
}

let memo = new Memory();
let memoryPlus = document.getElementById('memoryPlus');
memoryPlus.onclick = function() {
    let currNumber = screen.getNumber();
    memo.plus(Number(currNumber));
}

let memoryMinus = document.getElementById('memoryMinus');
memoryMinus.onclick = function() {
    let currNumber = screen.getNumber();
    memo.minus(Number(currNumber));
}

let memoryRecall = document.getElementById('memoryRecall');
memoryRecall.onclick = function() {
    let currNumber = screen.getNumber();
    let callMemory = memo.recall();
    if (callMemory === 0) {
        screen.setNumber(currNumber);
    } else {
        screen.setNumber(callMemory);
    }
}

let memoryClear = document.getElementById('memoryClear');
memoryClear.onclick = function() {
    memo.clear();
}