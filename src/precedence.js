"use strict";

/**
 *  Precedence determinate priority operations.  
 */
export class Precedence {

    /**
     *  Constructor.  
     */
    constructor() {
        this._numbers = [];
        this._operations = [];
    }

    /**
     * Gives the result of precedence operations.  
     */
    calculateResult() {
        let temporaryResult = this._numbers[0];
        let finalResult = 0;
        for (let i = 0; i < this._operations.length; i++) {
            if (this._operations[i] === 'x') {
                temporaryResult *= this._numbers[i + 1];
            } else if (this._operations[i] === '/') {
                temporaryResult /= this._numbers[i + 1];
            } else {
                let sign = this._operations[i] === '+' ? 1 : -1;
                if (i !== this._operations.length - 1 && this._operations[i + 1] === '/' || this._operations[i + 1] === 'x') {
                    finalResult += temporaryResult;
                    temporaryResult = sign * this._numbers[i + 1];
                } else {
                    temporaryResult += sign * this._numbers[i + 1];
                }
            }
            if (i === this._operations.length - 1) {
                finalResult += temporaryResult;
            }
        }
        return finalResult;
    }

    /**
     * Adds a operation. 
     * @param {String}  operation. 
     */
    addOperation(operation) {
        this._operations.push(operation);
    }

    /**
     * Adds a number.
     * @param {Number}  number. 
     */
    addNumber(number) {
        this._numbers.push(number);
    }
}