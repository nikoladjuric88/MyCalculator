(function() {
    "use strict";

    function Precedence() {
        this.numberArr = [];
        this.operationArr = [];
        this.advantageous = false;
        this.finalArr = [];
    }

    Precedence.prototype.returnValue = function() {
        this.result = Number(this.numberArr[0]);

        for (var i = 0; i < this.numberArr.length; i++) {
            if (this.operationArr[i] === 'x' || this.operationArr[i] === '/') {
                if (this.operationArr[i - 1] === '-') {
                    this.result *= -1;
                }
                if (this.operationArr[i] === 'x') {
                    this.result *= this.numberArr[i + 1];
                }
                if (this.operationArr[i] === '/') {
                    this.result /= this.numberArr[i + 1];
                }
            }

            if (this.operationArr[i] === '-' || this.operationArr[i] === '+') {
                if (this.operationArr[i + 1] === '/' || this.operationArr[i + 1] === 'x') {
                    this.finalArr.push(this.result);
                    this.result = this.numberArr[i + 1];
                    continue;
                }
                if (this.operationArr[i] === '+') {
                    this.result += Number(this.numberArr[i + 1]);
                }
                if (this.operationArr[i] === '-') {
                    this.result -= this.numberArr[i + 1];
                }
            }
            if (this.operationArr[i]) {
                if (this.operationArr[i + 1] !== '+' && this.operationArr[i + 1] !== '-' && this.operationArr[i + 1] !== '/' && this.operationArr[i + 1] !== 'x') {
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
        this.operationArr.push(operation);
    }

    Precedence.prototype.addNumbers = function(number) {
        this.numberArr.push(number);
    };

    provide('precedence.ops', Precedence);

}());