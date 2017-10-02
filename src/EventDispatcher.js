function EventDispatcher() {
    this.eventDispatcherMap = {};
}

EventDispatcher.prototype.bind = function(nameOfFunction, whichFunction) {
    if(this.eventDispatcherMap[nameOfFunction]) {
        this.eventDispatcherMap[nameOfFunction].push(whichFunction);
    } else {
         this.eventDispatcherMap[nameOfFunction] = [whichFunction];
    }
};

EventDispatcher.prototype.trigger = function(nameOfFunction) {
    for (var i = 0; i < this.eventDispatcherMap[nameOfFunction].length; i++) {
        this.eventDispatcherMap[nameOfFunction][i]();
    }
};

module.exports = EventDispatcher;
