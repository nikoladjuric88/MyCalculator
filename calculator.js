(function() {
    "use strict";

    var result = 0;
    var callScreen = require('calculator.output.Screen');
    var screen = new callScreen(document.getElementById('screen'));

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
            screen.resetOnNextInput();
            screen.setNumber(result);
            prevOperation = this.innerHTML;
        }
    }

    var newNum = require('memory.num');
    var memo = new newNum();

    var numPlus = document.getElementById('memoryPlus');
    numPlus.onclick = function() {
        var currNumber = screen.getNumber();    
        memo.mPlus(currNumber);
         console.log(memo);  
          screen.resetOnNextInput();
     } 

    var numMinus = document.getElementById('memoryMinus');
    numMinus.onclick = function() {
        var currNumber = screen.getNumber();
        memo.mMinus(currNumber);
        console.log(memo);
        screen.resetOnNextInput();
    }

    var mRecall = document.getElementById('memoryRecall');
    mRecall.onclick = function() {
       var callMemory = memo.mRecall();
       screen.setNumber(callMemory);
        screen.resetOnNextInput();
    }

    var mClear = document.getElementById('memoryClear');
    mClear.onclick = function() {
       var noMemory = memo.mClear();
       console.log(noMemory);
        screen.resetOnNextInput();
    }

})();