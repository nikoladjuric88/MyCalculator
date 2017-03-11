var writes = document.getElementById('screen');
var currNumber = 0;
var result = 0;

var buttons = document.querySelector('.allButtons');
var numberButtons = buttons.querySelectorAll('.number');

for (var i = 0; i <= numberButtons.length - 1; i++) {

    numberButtons[i].onclick = function() {

        var buttonNumber = parseInt(this.innerHTML);

        currNumber = currNumber * 10 + buttonNumber

        writes.value = currNumber;

    }
};

var operationButtons = buttons.querySelectorAll('.operation');

for (var i = 0; i <= operationButtons.length - 1; i++) {
    var action = 1;
    var prevOperation;
    operationButtons[i].onclick = function() {

        var operation = this.innerHTML;



        /*===================================================================*/
        if (operation === '+') {

            if (action === 1) {
                result = currNumber;
                currNumber = 0;
                writes.value = result;
                action = 2;
            }

              if (prevOperation === 'multiplication') {
                result = result * currNumber;
                writes.value = result;
                currNumber = 0;
                action = 3;
                prevOperation = 'addition';
            }

            if (prevOperation === 'subtraction') {
                result = result - currNumber;
                writes.value = result;
                currNumber = 0;
                action = 4;
                prevOperation = 'addition'
            }
  
            if (prevOperation === 'division') {
                result = result / currNumber;
                writes.value = result;
                currNumber = 0;
                action = 5;
                prevOperation = 'addition'
            }

             if (prevOperation === 'addition') {
                result = result + currNumber;
                currNumber = 0;
                writes.value = result;
            }

                 prevOperation = 'addition';
        }
        /*===================================================================*/
        if (operation === '-') {

             if (action === 1) {
                result = currNumber;
                currNumber = 0;
                writes.value = result;
                action = 2;
            }

            if (prevOperation === 'multiplication') {
                result = result * currNumber;
                writes.value = result;
                currNumber = 0;
                action = 3;
                prevOperation = 'subtraction'
            }

            if (prevOperation === 'addition') {
                result = result + currNumber;
                writes.value = result;
                currNumber = 0;
                action = 4;
                prevOperation = 'subtraction'
            }

            if (prevOperation === 'division') {
                result = result / currNumber;
                writes.value = result;
                currNumber = 0;
                action = 5;
                prevOperation = 'subtraction'
            }

              if (prevOperation === 'subtraction') {
                result = result - currNumber;
                currNumber = 0;
                writes.value = result;
            }

            prevOperation = 'subtraction';
        }
        /*===================================================================*/

        if (operation === 'x') {

            if (action === 1) {
                result = currNumber;
                writes.value = result;
                currNumber = 0;
                action = 2;
            }

            if (prevOperation === 'addition') {
                result = result + currNumber;
                writes.value = result;
                currNumber = 1;
                action = 3;
                prevOperation = 'multiplication'
            }

            if (prevOperation === 'multiplication') {
                result = result * currNumber;
                currNumber = 0;
                writes.value = result;
            }

            if (prevOperation === 'subtraction') {
                result = result - currNumber;
                writes.value = result;
                currNumber = 0;
                action = 4;
                prevOperation = 'multiplication'

            }

            if (prevOperation === 'division') {
                result = result / currNumber;
                writes.value = result;
                currNumber = 0;
                action = 5;
                prevOperation = 'multiplication'
            }

             prevOperation = 'multiplication';
        }
 /*===================================================================*/

         if (operation === '/') {

            if (prevOperation === 'addition') {
                result = result + currNumber;
                writes.value = result;
                currNumber = 1;
                action = 3;
                prevOperation = 'division'
            }

            if (prevOperation === 'division') {
                result = result / currNumber;
                currNumber = 0;
                writes.value = result;
            }

             if (prevOperation === 'subtraction') {
                result = result - currNumber;
                currNumber = 0;
                writes.value = result;
                action = 4;
                prevOperation = 'division'
                
            }

            if (prevOperation === 'multiplication') {
                result = result * currNumber;
                currNumber = 0;
                writes.value = result;
                action = 5;
                prevOperation = 'division';
            }

            if (action === 1) {
                result = currNumber;
                writes.value = result;
                currNumber = 0;
                action = 2;
                prevOperation = 'division';
            }

            prevOperation = 'division';
        }

    }
}