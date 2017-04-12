(function() {
    "use strict";

    var result = 0;
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

    for (var i = 0; i <= operationButtons.length - 1; i++) {
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
                }

            }
            screen.resetOnNextInput();
            screen.setNumber(result);
            prevOperation = this.innerHTML;
        }
    }

    function Watch(fabric) {
        this.fabric = fabric;
    }
    provide('which.fabric', Watch);
    var secondClass = require('which.fabric');
    var secondInstance = new secondClass('leather');
    console.log(secondInstance);

    function Screen(kind) {
        this.kind = kind;
    };
    provide('calculator.Screen', Screen);
    var nextClass = require('calculator.Screen');
    var nextInstance = new nextClass('glass');
    console.log(nextInstance);

    function Screen(usage) {
        this.usage = usage;
    }
    provide('clock.Screen', Screen);
    var anotherClass = require('clock.Screen');
    var anotherInstance = new anotherClass('time');
    console.log(anotherInstance);

})();