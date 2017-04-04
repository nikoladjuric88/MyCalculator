function provide(newClass, constructor) {
	var newClass = new constructor(document.getElementById('screen'));
	return newClass;
};



/*
function require(className) {
	return function() {
		return new Class;
	}
};
*/