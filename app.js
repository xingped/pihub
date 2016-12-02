var Gpio = require('onoff').Gpio;
var button17 = new Gpio(11, 'in', 'both');
var button22 = new Gpio(15, 'in', 'both');
var button23 = new Gpio(16, 'in', 'both');
var button27 = new Gpio(13, 'in', 'both');

var button232 = new Gpio(23, 'in', 'both');

button17.watch(function(err, val) {
	if(err) throw err;
	console.log('btn17', val);
});

button22.watch(function(err, val) {
	if(err) throw err;
	console.log('btn22', val);
});

button23.watch(function(err, val) {
	if(err) throw err;
	console.log('btn23', val);
});

button27.watch(function(err, val) {
	if(err) throw err;
	console.log('btn27', val);
});

button232.watch(function(err, val) {
	if(err) throw err;
	console.log('btn232', val);
});

process.on('SIGINT', function() {
	button17.unexport();
	button22.unexport();
	button23.unexport();
	button27.unexport();
});

console.log('started');