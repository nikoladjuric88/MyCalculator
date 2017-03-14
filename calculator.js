(function() {

    var inputField = document.getElementById('screen');
    var currNumber = 0;
    var result = 0;

    var buttons = document.querySelector('.allButtons');
    var numberButtons = buttons.querySelectorAll('.number');
    /*=======================================================================*/

    function Screen() {

        this.element = inputField;
    }

    var screen = new Screen();

    Screen.prototype.setNumber = function() {

        this.element = (function() {

            for (var i = 0; i <= numberButtons.length - 1; i++) {

                numberButtons[i].onclick = function() {

                    var buttonNumber = parseInt(this.innerHTML);

                    currNumber = currNumber * 10 + buttonNumber

                    inputField.value = currNumber;
                }
            }
        })();

    }
    
    screen.setNumber();
    console.log(screen);

    /*=======================================================================*/
    /*
     Screen.prototype.setNumber = function(content) {
            this.element = content;

         }
       screen.setNumber(17);
       */
    /*=======================================================================*/

    /*

    Screen.prototype.setErrorColor = function() {
        
       inputField.style.backgroundColor = 'red';
          }

    screen.setErrorColor();

    console.log(Screen);
    /*
    /*=======================================================================*/

    /*

      for (var i = 0; i <= numberButtons.length - 1; i++) {

            numberButtons[i].onclick = function() {

                var buttonNumber = parseInt(this.innerHTML);

                currNumber = currNumber * 10 + buttonNumber

                inputField.value = currNumber;

            }
        };

    */

    var operationButtons = buttons.querySelectorAll('.operation');

    for (var i = 0; i <= operationButtons.length - 1; i++) {
        var isInitialAction = true;
        var prevOperation;
        operationButtons[i].onclick = function() {

            //    var operation = this.innerHTML; - visak 

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
            inputField.value = result;
            prevOperation = this.innerHTML;
        }
    }

})();