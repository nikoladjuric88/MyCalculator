 "use strict";

 /**
  * Memory keeps given result in memory.
  */
 export class Memory {

     /**
      *  Constructor.  
      */
     constructor() {
         this._num = 0;
     }

     /**
      * Returns the result from the memory.
      */
     get number() {
         return this._num;
     }

     /**
      *  Adds a number to the result in the memory.
      *  @param {Number}  number.
      */
     plus(number) {
         this._num += number;
     }

     /**
      *  Subtracts a number from the result in the memory.
      *  @param {Number}  number.
      */
     minus(number) {
         this._num -= number;
     }

     /**
      * Resets the result to zero.
      */
     clear() {
         this._num = 0;
     }
 }