(function() {
    "use strict";

    function Advantage() {
        this.numberArr = [];
        this.operationArr = [];
        this.advantageous = false;
    }

    Advantage.prototype.returningValue = function() {

        for (var i = 0; i < this.numberArr.length; i++) {
            if (this.operationArr[i] === '/') {
                this.numberArr[i] = this.numberArr[i] / this.numberArr[i + 1];
                this.numberArr[i + 1] = 0;
                this.numberArr.splice(this.numberArr.indexOf(0), 1);
                this.operationArr.splice(this.operationArr.indexOf('/'), 1);
            }
        }

        for (var i = 0; i < this.numberArr.length; i++) {
            if (this.operationArr[i] === 'x') {
                this.numberArr[i] = this.numberArr[i] * this.numberArr[i + 1];
                this.numberArr[i + 1] = 0;
                this.numberArr.splice(this.numberArr.indexOf(0), 1);
                this.operationArr.splice(this.operationArr.indexOf('x'), 1);
            }
        }

        for (var i = 0; i < this.numberArr.length; i++) {
            if (this.operationArr[i] === '-') {
                this.numberArr[i] = this.numberArr[i] - this.numberArr[i + 1];
                this.numberArr[i + 1] = 0;
                this.numberArr.splice(this.numberArr.indexOf(0), 1);
                this.operationArr.splice(this.operationArr.indexOf('-'), 1);
            }
        }

        for (var i = 0; i < this.numberArr.length; i++) {
            if (this.operationArr[i] === '+') {
                this.numberArr[i] = this.numberArr[i] + this.numberArr[i + 1];
                this.numberArr[i + 1] = 0;
                this.numberArr.splice(this.numberArr.indexOf(0), 1);
                this.operationArr.splice(this.operationArr.indexOf('+'), 1);
            }
        }
        return this.numberArr;
    }

    Advantage.prototype.advantageousOperationsOn = function() {
        this.advantageous = true;
    }

    Advantage.prototype.addOperations = function(operation) {
        this.operationArr.push(operation);
    }

    Advantage.prototype.addNumbers = function(number) {
        this.numberArr.push(number);
    };

    provide('advantageous.ops', Advantage);

}());
