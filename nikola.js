/*
var numbers = [5, 3, 4];
var operations = ['+', 'x'];
var finalResult = 0;

var result = numbers[0];

for (var i = 0; i < operations.length; i++) {
    if (operations[i] === 'x') {
        result *= numbers[i + 1];
    }
    if (operations[i] === '/') {
        result /= numbers[i + 1];
    }
    if (operations[i] === '-') {
        if (operations[i + 1] === 'x' || operations[i + 1] === '/') {
            finalResult += result;
            result = -numbers[i + 1];
        } else {
            result -= numbers[i + 1];
        }
    }
    if (operations[i] === '+') {
        if (operations[i + 1] === '/' || operations[i + 1] === 'x') {
            finalResult += result;
            result = numbers[i + 1];
        } else {
            result += numbers[i + 1];
        }
    }
    if (i === operations.length - 1) {
        finalResult += result;
    }
}
console.log(finalResult);
*/

var numbers = [5, 3, 2, 4, 1];
var operations = ['+', 'x', '+', 'x'];
var finalResult = 0;

var temporaryResult = numbers[0];

for (var i = 0; i < operations.length; i++) {
    if (operations[i] === 'x') {
        temporaryResult *= numbers[i + 1];
    } else if (operations[i] === '/') {
        temporaryResult /= numbers[i + 1];
    } else {
        var sign = operations[i] === '+' ? 1 : -1;
        if (i !== operations.length - 1) {
            if (operations[i + 1] === '/' || operations[i + 1] === 'x') {
                finalResult += temporaryResult;
                temporaryResult = sign * numbers[i + 1];
            } else {
                temporaryResult += sign * numbers[i + 1];
            }
        } else {
            temporaryResult += sign * numbers[i + 1];
        }
    }
    if (i === operations.length - 1) {
        finalResult += temporaryResult;
    }
    console.log(finalResult);
}