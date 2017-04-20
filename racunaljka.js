
var arrNumbers = [10, 2, 2, 2, 3];
var arrOperations = ['/', 'x', 'x', '+'];

for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        while (arrOperations[x] === '/' && i === x) {
            arrNumbers[i] = arrNumbers[i] / arrNumbers[i + 1];
            arrNumbers.splice(arrNumbers.indexOf(arrNumbers[i + 1]), 1);
            arrOperations.splice(arrOperations.indexOf(arrOperations[x]), 1);
        }
    }
}
for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        while (arrOperations[x] === 'x' && i === x) {
            arrNumbers[i] = arrNumbers[i] * arrNumbers[i + 1];           
            arrNumbers.splice(arrNumbers.indexOf(arrNumbers[i + 1]), 1);
            arrOperations.splice(arrOperations.indexOf(arrOperations[x]), 1);
        }
    }
}
for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        while (arrOperations[x] === '-' && i === x) {
            arrNumbers[i] = arrNumbers[i] - arrNumbers[i + 1];           
            arrNumbers.splice(arrNumbers.indexOf(arrNumbers[i + 1]), 1);
            arrOperations.splice(arrOperations.indexOf(arrOperations[x]), 1);
        }
    }
}
for (var i = 0; i < arrNumbers.length; i++) {
    for (var x = 0; x < arrOperations.length; x++) {
        while (arrOperations[x] === '+' && i === x) {
            arrNumbers[i] = arrNumbers[i] + arrNumbers[i + 1];          
            arrNumbers.splice(arrNumbers.indexOf(arrNumbers[i + 1]), 1);
            arrOperations.splice(arrOperations.indexOf(arrOperations[x]), 1);
        }
    }
}
