(function() {
    "use strict";

    function Precedence() {
        this.numbers = [];
        this.operations = [];
        this.turnOn = false;
        this.finalResult = 0;
    }

    Precedence.prototype.returnValue = function() {
        this.result = Number(this.numbers[0]);

        for (var i = 0; i < this.numbers.length; i++) {
            if (this.operations[i] === 'x') {
                this.result *= this.numbers[i + 1];
            }
            if (this.operations[i] === '/') {
                this.result /= this.numbers[i + 1];
            }
            if (this.operations[i] === '-') {
                if (this.operations[i + 1] === '/' || this.operations[i + 1] === 'x') {
                    this.finalResult += this.result;
                    this.result = -this.numbers[i + 1];
                    continue;
                }
                this.result -= this.numbers[i + 1];
            }
            if (this.operations[i] === '+') {
                if (this.operations[i + 1] === '/' || this.operations[i + 1] === 'x') {
                    this.finalResult += this.result;
                    this.result = this.numbers[i + 1];
                    continue;
                }
                this.result += Number(this.numbers[i + 1]);
            }
            if (this.operations[i]) {
                if (this.operations[i + 1] !== '+' && this.operations[i + 1] !== '-' && this.operations[i + 1] !== '/' && this.operations[i + 1] !== 'x') {
                    this.finalResult += this.result;
                }
            }
        }
        return this.finalResult;
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