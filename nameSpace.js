(function(global) {
    "use strict";
    var obj = {};

    function provide(callInstance, classConstructor) {
        obj[callInstance] = classConstructor;
    }

    function require(newName) {
        return obj[newName];
    }

    global.provide = provide;
    global.require = require;

})(window);
