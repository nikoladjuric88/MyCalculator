function EventDispatcher () {
	this.eventDispatcherMap = {};
};

EventDispatcher.prototype.bind = function(eventName, handler) {
	if(this.eventDispatcherMap[eventName]) {
		this.eventDispatcherMap[eventName].push(handler);
	} else {
		this.eventDispatcherMap[eventName] = [handler];
	}
};

EventDispatcher.prototype.trigger = function(eventName) {
	for (var i = 0; i < this.eventDispatcherMap[eventName].length; i++) {
			this.eventDispatcherMap[eventName][i]();	
	};
};

module.exports = EventDispatcher;