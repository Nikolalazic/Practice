function generation() {
	const arrayNum = [];
	while (arrayNum.length < 10) {
		const random = Math.floor(Math.random() * 100);
		arrayNum.push(random);
	}
	return arrayNum;
}


function maxNum() {
	const numberGeneration = generation();
	let max = 0;

	for (let i = 0; i < numberGeneration.length; i += 1) {
		if (numberGeneration[i] > max) {
			max = numberGeneration[i];
		}
	}
	return max;
}
console.log(maxNum());
