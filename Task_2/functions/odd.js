odd = function odd(min, max) {
	let count = [];
	for (let i = min; i <= max; i += 1) {
		if(i % 2 !== 0 ) {
			count.push(i);
		}
	}
	return count;
}