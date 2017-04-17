(function() {
    "use strict";

    function Memory() {
        this.num = 0;
    }

    Memory.prototype.mPlus = function(number) {
        this.num += Number(number);
    }

    Memory.prototype.mMinus = function(number) {
        this.num += Number(-number);
    }

    Memory.prototype.mRecall = function() {
        return this.num;
    }

    Memory.prototype.mClear = function() {
        this.num = 0;
        return this.num;
    }

    provide('memory.num', Memory);
}());
