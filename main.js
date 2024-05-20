function generateSerial() {
	'use strict';

	var chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",

		serialLength = 20,

		randomSerial = '',

		i,

		randomNumber;

	for (i = 0; i < serialLength; i = i + 1) {
		var randomNumber = Math.floor(Math.random() * chars.length);
		randomSerial += chars.substring(randomNumber, randomNumber + 1);
	}

	document.getElementById('serial').innerHTML = randomSerial;
}