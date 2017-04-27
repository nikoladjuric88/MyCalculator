/* ovako radi kad su razliciti znaci: /,x,/,/,x          */
var arrNumbers = [3, 3, 3, 4];
var arrOperations = ['x', '/', 'x'];
var result;

for (var i = 0; i < arrOperations.length; i++) {
    if (arrOperations.indexOf('/') < arrOperations.indexOf('x') && arrOperations.indexOf('/') === i) {
        result = arrNumbers[i];
    }
    if (arrOperations.indexOf('x') < arrOperations.indexOf('/') && arrOperations.indexOf('x') === i) {
        result = arrNumbers[i];
    }
    if (arrOperations[i] === 'x') {
        result = result * arrNumbers[i + 1];
    }
    if (arrOperations[i] === '/') {
        result = result / arrNumbers[i + 1];
    }
}

/* ne mogu da uklopim sa 'i' umesto s index arrOperations.indexOf('/'), znam sta se desava ali nikako ne 
mogu da ga uklopim */
/*-------------------------------------------------------------------------------------------------*/

/* ovako radi kad su isti znaci: x,x,x          */

var arrNumbers = [3, 3, 1, 4];
var arrOperations = ['/', '/', '/'];
var result;

for (var i = 0; i < arrOperations.length; i++) {
    if (arrOperations.indexOf('/') === i) {
        result = arrNumbers[i];
    }
    if (arrOperations.indexOf('x') === i) {
        result = arrNumbers[i];
    }
    if (arrOperations[i] === 'x') {
        result = result * arrNumbers[i + 1];
    }
    if (arrOperations[i] === '/') {
        result = result / arrNumbers[i + 1];
    }
}
