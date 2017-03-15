(function() {

    var inputField = document.getElementById('screen');
    var currNumber = 0;
    var result = 0;

    var buttons = document.querySelector('.allButtons');
    var numberButtons = buttons.querySelectorAll('.number');


    function Screen() {
        this._element = document.getElementById('screen');
    }

    Screen.prototype.setNumber = function(number) {
        this._element.value = number;
    }

    Screen.prototype.addDigit = function(digit) {
        currNumber = currNumber * 10 + digit;
        this.setNumber(currNumber);
    }

    var screen = new Screen();


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
                }

            }
            currNumber = 0;
            screen.setNumber(result);
            prevOperation = this.innerHTML;
        }
    }

})();