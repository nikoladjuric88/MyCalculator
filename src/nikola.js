function NameOfClass() {
    this.obj = {};
}

NameOfClass.prototype.bind = function(nameOfFunc, func) {
    if(this.obj[nameOfFunc]) {
        this.obj[nameOfFunc].push(func);
    } else {
         this.obj[nameOfFunc] = [func];
    }
};

NameOfClass.prototype.trigger = function(nameOfFunc) {
    for (var i = 0; i < this.obj[nameOfFunc].length; i++) {
        this.obj[nameOfFunc][i]();
    }
};

module.exports = NameOfClass;