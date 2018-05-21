const evenNumber = require('./functions/steam.js');
const oddNumber = require('./functions/odd.js');

const evenNumbers = steam(23, 45);
const oddNumbers = odd(11, 75);

if (evenNumbers.length < oddNumbers.length) {
	console.log(oddNumbers);
}
else {
	console.log(evenNumbers);
}