var arrNumbers = [10, 2, 2, 2, 2];
var arrOperations = ['+', '+', 'x', 'x'];

for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        while (arrOperations[x] === '/' && i === x) {
            arrNumbers[i] = arrNumbers[i] / arrNumbers[i + 1];
            arrNumbers[i + 1] = 0;
            arrNumbers.splice(arrNumbers.indexOf(0), 1);
            arrOperations.splice(arrOperations.indexOf('/'), 1);
        }
    }
}
for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        while (arrOperations[x] === 'x' && i === x) {
            arrNumbers[i] = arrNumbers[i] * arrNumbers[i + 1]; 
            arrNumbers[i + 1] = 0;          
            arrNumbers.splice(arrNumbers.indexOf(0), 1);
            arrOperations.splice(arrOperations.indexOf('x'), 1);
        }
    }
}

for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        while (arrOperations[x] === '-' && i === x) {
            arrNumbers[i] = arrNumbers[i] - arrNumbers[i + 1];  
            arrNumbers[i + 1] = 0;           
            arrNumbers.splice(arrNumbers.indexOf(0), 1);
            arrOperations.splice(arrOperations.indexOf('-'), 1);
        }
    }
}
for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        while (arrOperations[x] === '+' && i === x) {
            arrNumbers[i] = arrNumbers[i] + arrNumbers[i + 1];  
            arrNumbers[i + 1] = 0;          
            arrNumbers.splice(arrNumbers.indexOf(0), 1);
            arrOperations.splice(arrOperations.indexOf('+'), 1);
        }
    }
}
