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
    operationButtons[i].onclick = function() {

        var operation = this.innerHTML;

        if (operation === '-') {

            if (action === 1) {
                result = currNumber;
                currNumber = 0;
                writes.value = result;
                action = 2;

            } else {

                result = result - currNumber;
                currNumber = 0;
                writes.value = result;

            }
        }

        if (operation === '+') {

            if (action === 1) {
                result = currNumber;
                currNumber = 0;
                writes.value = result;
                action = 2;
            } else {
                result = result + currNumber;
                currNumber = 0;
                writes.value = result;
            }

        }

         if (operation === 'x') {

            if (action === 1) {
                result = currNumber;
                currNumber = 0;
                writes.value = result;
                action = 2;
            } else {
                result = result * currNumber;
                currNumber = 0;
                writes.value = result;
            }

        }

          if (operation === '/') {

            if (action === 1) {
                result = currNumber;
                currNumber = 0;
                writes.value = result;
                action = 2;
            } else {
                result = result / currNumber;
                currNumber = 0;
                writes.value = result;
            }

        }

    }
}