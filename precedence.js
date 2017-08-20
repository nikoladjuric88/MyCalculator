(function() {
    "use strict";

    function Precedence() {
        this.numbers = [];
        this.operations = [];
        this.turnOn = false;
        this.finalArr = [];
    }

    Precedence.prototype.returnValue = function() {
        this.result = Number(this.numbers[0]);

        for (var i = 0; i < this.numbers.length; i++) {
            if (this.operations[i] === 'x' || this.operations[i] === '/') {
                if (this.operations[i - 1] === '-') {
                    this.result *= -1;
                }
                if (this.operations[i] === 'x') {
                    this.result *= this.numbers[i + 1];
                }
                if (this.operations[i] === '/') {
                    this.result /= this.numbers[i + 1];
                }
            }

            if (this.operations[i] === '-' || this.operations[i] === '+') {
                if (this.operations[i + 1] === '/' || this.operations[i + 1] === 'x') {
                    this.finalArr.push(this.result);
                    this.result = this.numbers[i + 1];
                    continue;
                }
                if (this.operations[i] === '+') {
                    this.result += Number(this.numbers[i + 1]);
                }
                if (this.operations[i] === '-') {
                    this.result -= this.numbers[i + 1];
                }
            }
            if (this.operations[i]) {
                if (this.operations[i + 1] !== '+' && this.operations[i + 1] !== '-' && this.operations[i + 1] !== '/' && this.operations[i + 1] !== 'x') {
                    this.finalArr.push(this.result);
                    this.result = this.finalArr.reduce(function(a, b) {
                        return a + b;
                    })
                }
            }
        }
        return this.result;
    }
    Precedence.prototype.precedenceOn = function() {
        this.turnOn = true;
    }

    Precedence.prototype.addOperations = function(operation) {
        this.operations.push(operation);
    }

    Precedence.prototype.addNumbers = function(number) {
        this.numbers.push(number);
    };

    provide('precedence.ops', Precedence);
    
}());