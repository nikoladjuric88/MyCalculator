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

var eventDispatcher = new EventDispatcher();

eventDispatcher.bind("english", function() {
    console.log("hi!");
});

eventDispatcher.bind("english", function() {
    console.log("hello");
});

eventDispatcher.bind("english", function() {
    console.log("it works!");
});

eventDispatcher.bind("serbian", function() {
    console.log("zdravo");
});

eventDispatcher.bind("serbian", function() {
    console.log("gde si baki");
});

eventDispatcher.trigger("english");

