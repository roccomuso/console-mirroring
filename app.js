var _methods = [
{name: 'log', color: '#cccccc'},
{name: 'info', color: '#2795EE'},
{name: 'warn', color: '#F18C16'},
{name: 'error', color: '#FF4D4D'}
];

module.exports = function(io){
	
	// save old methods
	_methods.forEach(function(method){
		if (method.name in console)
			console['old_'+method.name] = console[method.name];
	});

	function replace_handler(method){
		return function(){
			// TODO
			var args = Array.prototype.slice.call(arguments);
			var args = Array.prototype.slice.call(arguments);
			var args_concat = args.map(function(elem){
				if (typeof elem === 'object')
					return JSON.stringify(elem);
				else
			    	return elem.toString();
			}).join(" ");
			var data = {color: method.color, text: args_concat};
			io.emit('logEvent', data);
	    	console['old_'+method.name].apply(console, args);
		};
	}

	// replace original methods with new methods
	_methods.forEach(function(method){
		console[method.name] = replace_handler(method);
	});

};