 "use strict";

/**
 *  Constructor Memory keep result in memory. 
 */
 function Memory() {
     this.num = 0;
 }

/**
 *  Plus add number to result in memory.
 *  @param {number}  number
 */
 Memory.prototype.Plus = function(number) {
     this.num += number;
 }

/**
 *  Minus subtracts number to result in memory.
 *  @param {number}  number
 */
 Memory.prototype.Minus = function(number) {
     this.num += -number;
 }

/**
 *  Recall returns result from memory.
 */
 Memory.prototype.Recall = function() {
     return this.num;
 }

/**
 *  Clear set result equal zero.
 */
 Memory.prototype.Clear = function() {
     this.num = 0;
 }

 module.exports = Memory;