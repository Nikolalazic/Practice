const evenNumber = require('./functions/even.js');
const oddNumber = require('./functions/odd.js');

const evenNumbers = even(23, 45);
const oddNumbers = odd(11, 75);

if (evenNumbers.length < oddNumbers.length) {
	console.log(oddNumbers);
}
else {
	console.log(evenNumbers);
}