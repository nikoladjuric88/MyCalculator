(function(global) {
    "use strict";

    function Advantage() {
    	this.arr = [];
    	global.advantageous = false;
      //  this.ops = '';
      
    }

    Advantage.prototype.advantageousOperationsOn = function() {
        global.advantageous = true; 
        return global.advantageous;    
    }

   /* Advantage.prototype.setOps = function(x) {
        this.ops = x;
        return this.ops;
    }
*/


    Advantage.prototype.addNumbers = function(number) {
    	 //  this.ops = number;
    	   this.arr.push(number);
          // return this.ops;
          return this.arr;
       };



    provide('advantageous.ops', Advantage);

 }(window));   