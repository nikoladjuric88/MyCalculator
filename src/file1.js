var EventDispatcher = require('./EventDispatcher');

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