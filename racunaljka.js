var arrNumbers = [10, 2, 2, 2, 2];
var arrOperations = ['/', 'x', 'x', '-'];

for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        for (var v = 0; v < arrOperations.length; v++) {
            while (arrOperations[x] === '/' && i === x) {
                arrNumbers[i] = arrNumbers[i] / arrNumbers[i + 1];
                arrNumbers[i + 1] = 0;
                arrNumbers.splice(arrNumbers.indexOf(0), 1);
                arrOperations.splice(arrOperations.indexOf('/'), 1);
            }

            while (arrOperations[x] === 'x' && i === x) {
                arrNumbers[i] = arrNumbers[i] * arrNumbers[i + 1];
                arrNumbers[i + 1] = 0;
                arrNumbers.splice(arrNumbers.indexOf(0), 1);
                arrOperations.splice(arrOperations.indexOf('x'), 1);

                if (arrNumbers.length === 2 && arrOperations[x] === '/') { //ovo me zazalo ne znam sto nece / do kraja
                    arrNumbers[i] = arrNumbers[i] / arrNumbers[i + 1];
                    arrNumbers[i + 1] = 0;
                    arrNumbers.splice(arrNumbers.indexOf(0), 1);
                    arrOperations.splice(arrOperations.indexOf('/'), 1);
                }
            }
        }
    }
}
for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        for (var v = 0; v < arrOperations.length; v++) {
            while (arrOperations[x] === '-' && i === x) {
                arrNumbers[i] = arrNumbers[i] - arrNumbers[i + 1];
                arrNumbers[i + 1] = 0;
                arrNumbers.splice(arrNumbers.indexOf(0), 1);
                arrOperations.splice(arrOperations.indexOf('-'), 1);
            }
            while (arrOperations[x] === '+' && i === x) {
                arrNumbers[i] = arrNumbers[i] + arrNumbers[i + 1];
                arrNumbers[i + 1] = 0;
                arrNumbers.splice(arrNumbers.indexOf(0), 1);
                arrOperations.splice(arrOperations.indexOf('+'), 1);
            }
        }
    }
}