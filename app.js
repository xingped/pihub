var Gpio = require('onoff').Gpio;
var button = new Gpio(11, 'in', 'both');

button.watch(function(err, val) {
	if(err) {
		throw err;
	}

	console.log('button pressed', val);
});

process.on('SIGINT', function() {
	button.unexport();
});