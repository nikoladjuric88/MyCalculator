this.obj = {};
function provide(callInstance, classConstructor) {
   this.callInstance = callInstance;
	this.classConstructor = classConstructor;
 
	 key =  this.callInstance;
	 obj[key] = this.classConstructor;
	 
	}

function require(newName) {
	if(newName === key)	
		return obj[key];
};

function Screen(kind) {
	this.kind = kind;
}; 
provide('calculator.Screen', Screen);

var nextClass = require('calculator.Screen');
var nextInstance = new nextClass('glass');
console.log(nextInstance);


function Screen(usage) {
	this.usage = usage;
}
provide('clock.Screen', Screen);


var anotherClass = require('clock.Screen');
var anotherInstance = new anotherClass('time');
console.log(anotherInstance);


function Sneak(color) {
	this.color = color;
}

provide('what.Sneak', Sneak);
var sequentClass = require('what.Sneak');
var sequentInstance = new sequentClass('red');
console.log(sequentInstance);

function Watch(fabric) {
	this.fabric = fabric;
}

provide('which.fabric', Watch);
var secondClass = require('which.fabric');
var secondInstance = new secondClass('leather');
console.log(secondInstance);