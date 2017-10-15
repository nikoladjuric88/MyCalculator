 "use strict";

/**
 * Memory keeps given result in memory.
 * Constructor. 
 */
 function Memory() {
     this.num = 0;
 }

/**
 *  Adds a number to the result in the memory.
 *  @param {Number}  number.
 */
 Memory.prototype.Plus = function(number) {
     this.num += number;
 }

/**
 *  Subtracts a number from the result in the memory.
 *  @param {Number}  number.
 */
 Memory.prototype.Minus = function(number) {
     this.num += -number;
 }

/**
 * Returns the result from the memory.
 */
 Memory.prototype.Recall = function() {
     return this.num;
 }

/**
 * Resets the result to zero.
 */
 Memory.prototype.Clear = function() {
     this.num = 0;
 }

 module.exports = Memory;