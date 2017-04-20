(function() {
    "use strict";

    var ChangeProgram = require('advantageous.ops');
    var changeProgram = new ChangeProgram();
    var adOps = document.getElementById('advantageusOps');
    adOps.onclick = function() {
        changeProgram.advantageousOperationsOn();
    }

    var result = 0;
    var Screen = require('calculator.output.Screen');
    var screen = new Screen(document.getElementById('screen'));

    var buttons = document.querySelector('.allButtons');
    var numberButtons = buttons.querySelectorAll('.number');

    for (var i = 0; i <= numberButtons.length - 1; i++) {

        numberButtons[i].onclick = function() {
            var buttonDigit = parseInt(this.innerHTML);
            screen.addDigit(buttonDigit);
        }
    };

    var operationButtons = buttons.querySelectorAll('.operation');

    for (var i = 0; i < operationButtons.length; i++) {
        var isInitialAction = true;
        var prevOperation;

        operationButtons[i].onclick = function() {
            var currNumber = screen.getNumber();

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

            if (changeProgram.advantageous === true) {
                var currOperation = this.innerHTML;
                screen.setNumber(currNumber);
                changeProgram.addNumbers(currNumber);
                if (currOperation !== '=') {
                    changeProgram.addOperations(currOperation);
                } else {
                    var outcome = changeProgram.returningValue();
                    screen.setNumber(outcome);
                }
            } else {
                screen.setNumber(result);
            }
            prevOperation = this.innerHTML;
            screen.resetOnNextInput();

           
        }

    }


    var Memory = require('memory.num');
    var memo = new Memory();

    var numPlus = document.getElementById('memoryPlus');
    numPlus.onclick = function() {
        var currNumber = screen.getNumber();
        memo.Plus(Number(currNumber));
        screen.resetOnNextInput();
    }

    var numMinus = document.getElementById('memoryMinus');
    numMinus.onclick = function() {
        var currNumber = screen.getNumber();
        memo.Minus(Number(currNumber));
        screen.resetOnNextInput();
    }

    var Recall = document.getElementById('memoryRecall');
    Recall.onclick = function() {
        var currNumber = screen.getNumber();
        var callMemory = memo.Recall();
        if (callMemory === 0) {
            screen.setNumber(currNumber);
        } else {
            screen.setNumber(callMemory);
        }
    }

    var Clear = document.getElementById('memoryClear');
    Clear.onclick = function() {
        var noMemory = memo.Clear();
    }

})();