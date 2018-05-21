function even() {
	let min = parseInt(process.argv[2]);
	let max = parseInt(process.argv[3]);
	let count = [];
	for (let i = min; i <= max; i += 1) {
		if(i % 2 === 0 ) {
			count.push(i);
		}
	}
	return count;
}
console.log(even());