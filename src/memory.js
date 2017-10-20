 "use strict";

 /**
  * Memory keeps given result in memory.
  */
 export class Memory {

     /**
      *  Constructor.  
      */
     constructor() {
         this.num = 0;
     }

     /**
      *  Adds a number to the result in the memory.
      *  @param {Number}  number.
      */
     plus(number) {
         this.num += number;
     }

     /**
      *  Subtracts a number from the result in the memory.
      *  @param {Number}  number.
      */
     minus(number) {
         this.num -= number;
     }

     /**
      * Returns the result from the memory.
      */
     recall() {
         return this.num;
     }

     /**
      * Resets the result to zero.
      */
     clear() {
         this.num = 0;
     }
 }