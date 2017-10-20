"use strict";

/**
 *  Precedence determinate priority operations.  
 */
export class Precedence {

    /**
     *  Constructor.  
     */
    constructor() {
        this.numbers = [];
        this.operations = [];
    }

    /**
     * Gives the result of precedence operations.  
     */
    calculateResult() {
        let temporaryResult = this.numbers[0];
        let finalResult = 0;
        for (let i = 0; i < this.operations.length; i++) {
            if (this.operations[i] === 'x') {
                temporaryResult *= this.numbers[i + 1];
            } else if (this.operations[i] === '/') {
                temporaryResult /= this.numbers[i + 1];
            } else {
                let sign = this.operations[i] === '+' ? 1 : -1;
                if (i !== this.operations.length - 1 && this.operations[i + 1] === '/' || this.operations[i + 1] === 'x') {
                    finalResult += temporaryResult;
                    temporaryResult = sign * this.numbers[i + 1];
                } else {
                    temporaryResult += sign * this.numbers[i + 1];
                }
            }
            if (i === this.operations.length - 1) {
                finalResult += temporaryResult;
            }
        }
        return finalResult;
    }

    /**
     * Allows calculation with precedence operations.  
     */
    precedenceOn() {
        this.turnOn = true;
    }

    /**
     * Adds a operation. 
     * @param {String}  operation. 
     */
    addOperation(operation) {
        this.operations.push(operation);
    }

    /**
     * Adds a number.
     * @param {Number}  number. 
     */
    addNumber(number) {
        this.numbers.push(number);
    }
}