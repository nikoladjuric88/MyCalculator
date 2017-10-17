function Assert() {

};

Assert.IsString = function(param) {
    if (param) {
        if (typeof param !== 'string') {
            throw new TypeError("Parameter should be string not a " + typeof param);
        }
    }
}

Assert.isNumber = function(param) {
    if (param) {
        if (typeof param !== 'number') {
            throw new TypeError("Parameter should be number not a " + typeof param);
        }
    }
}

Assert.isFunction = function(param) {
    if (param) {
        if (typeof param !== 'function') {
            throw new TypeError("Parameter should be function not a " + typeof param);
        }
    }
}

module.exports = Assert;