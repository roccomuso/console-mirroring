/*
* Browser module for console mirroring.
* Works with Socket.io
*/

var consoleMirror = (function(window){ // Module Pattern Design

	var methods = {};

	function validateOptions(){
		return new Promise(function(resolve, reject){
			if (typeof options === 'undefined') return reject('pass a valid option argument');
			if (typeof options.socketLib === 'undefined') return reject('pass a valid socket.io instance');
			if (typeof options.socketLib.io === 'undefined') return reject('Socket.io instance not valid');
			if ()
		});
	}

	methods.init = function(options){
		
		validateOptions.then(function(){

		}).catch(function(err){
			console.error(err);
		});

	};




	return methods;

})(window);

// How To configure:
// consoleMirror.init({
// 	socketLib: socket,
// 	containerId: '#console' 
// });