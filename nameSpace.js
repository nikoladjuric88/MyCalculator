(function(global) {
	 "use strict";
var obj = {};

function provide(callInstance, classConstructor) { 
    obj[callInstance] = classConstructor;
}

function require(newName) {
       for(var prop in obj) {
       	if(prop === newName) {
       		return obj[prop];
       	}
       }
};

global.provide = provide;
global.require = require;

})(window);