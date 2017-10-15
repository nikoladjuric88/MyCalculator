 "use strict";

/**
 * Memory keeps given result in memory.
 * Constructor. 
 */
 function Memory() {
     this.num = 0;
 }

/**
 *  Add number to result in memory.
 *  @param {number}  number
 */
 Memory.prototype.Plus = function(number) {
     this.num += number;
 }

/**
 *  Subtract number to result in memory.
 *  @param {number}  number
 */
 Memory.prototype.Minus = function(number) {
     this.num += -number;
 }

/**
 * Return result from memory.
 */
 Memory.prototype.Recall = function() {
     return this.num;
 }

/**
 * Set result equal zero.
 */
 Memory.prototype.Clear = function() {
     this.num = 0;
 }

 module.exports = Memory;