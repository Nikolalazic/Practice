const steamNumber = require('./functions/steam.js');
const oddNumber = require('./functions/odd.js');

const steamNumbers = steam(23, 45);
const oddNumbers = odd(11, 75);

if (steamNumbers.length < oddNumbers.length) {
	console.log(oddNumbers);
}
else {
	console.log(steamNumbers);
}