(function(global) {
	 "use strict";
var obj = {};
var key;
function provide(callInstance, classConstructor) {
    key = callInstance;
    obj[key] = classConstructor;
}

function require(newName) {
    if (newName === key)
        return obj[key];
};

global.provide = provide;
global.require = require;

})(window);