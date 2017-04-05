function provide(nameOfNewClass, classConstructor) {
    this.nameOfNewClass = nameOfNewClass;
    this.classConstructor = classConstructor;
};


function require(newName) {
    if(newName === this.nameOfNewClass) {
        return this.classConstructor;
    }; 
};


function Screen(kind) {
    this.kind = kind;
}; 

provide('calculator.Screen', Screen);

var nextClass = require('calculator.Screen');
var nextInstance = new nextClass('glass');
console.log(nextInstance);



function Snake(length) {
    this.length = length;
};

provide('python.Screen', Snake);

var anotherClass = require('python.Screen');
var anotherInstance = new anotherClass(12);
console.log(anotherInstance);

function Screen(shape) {
    this.shape = shape;
};

provide('clock.Screen', Screen);

var sequentClass = require('clock.Screen');
var sequentInstance = new sequentClass('circle');
console.log(sequentInstance);