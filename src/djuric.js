var NameOfClass = require('./nikola');

var nameCl = new NameOfClass();

nameCl.bind("english", function() {
    console.log("hi!");
});

nameCl.bind("english", function() {
    console.log("hello");
});

nameCl.bind("english", function() {
    console.log("it works!");
});

nameCl.bind("serbian", function() {
    console.log("zdravo");
});

nameCl.bind("serbian", function() {
    console.log("gde si baki");
});

nameCl.trigger("serbian");

