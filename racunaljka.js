var writes = document.getElementById('screen');
var account = '';

var buttons = document.querySelector('.allButtons');
var numberButtons = buttons.querySelectorAll('.number');

for (var i = 0; i <= numberButtons.length - 1; i++) {

    numberButtons[i].onclick = function() {

        account += this.innerHTML;

        if (account[0] === '0') {
            account = "";
        }
        writes.value = account;
        writes.focus();
/*======================================================================================================================*/
        var first = account.indexOf("-");
        var second = account.indexOf("-", 1);

        if (account[first] === '-' && account[second] === '-') {
            num1 = account.substring(0, second);
            num2 = account.substring(second + 1);
            writes.value = num2;
        }

        var textLength = account.length;

        for (var i = 0; i < textLength; i++) {
            num1 = account.substring(0, account.indexOf('+'));
            num2 = account.substring(account.indexOf('+') + 1);

            if (account[i] === '+') {
                writes.value = num2;

                
            }
        }
    }
};
/*======================================================================================================================*/

var operationButtons = buttons.querySelectorAll('.operation');

for (var i = 0; i <= operationButtons.length - 1; i++) {

    operationButtons[i].onclick = function() {

        account = Number(num1) + Number(num2);
        account += this.innerHTML;

        if (account[0] === '+' || account[0] === 'x' || account[0] === '/') {
            account = "";

        }
        var first = account.indexOf("+");
        var second = account.indexOf("+", 1);
        num1 = account.substring(0, second);
        num2 = account.substring(second + 1, account.lastIndexOf('+'));

        if (account[first] === '+' && account[second] === '+') {
            writes.value = account;
        }
        writes.focus();
    }
};

