(function() {

    /*        i don't need a hint                            */
    //var currNumber = 0;  problem
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
        var currValue = this._element.value;     //it has to be without parseInt(I realized) 
        currValue = currValue * 10 + digit;
        this.setNumber(currValue);

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
                result = screen._element.value; // problem
                console.log(screen.setNumber(number));
                console.log(screen.setNumber(currValue));
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