function ranNumber() {
	const arr = [];
	while (arr.length < 7) {
		const rand = Math.floor(Math.random() * 49) + 1;
		if (arr.indexOf(rand) === -1) {
			arr.push(rand);
		}
	}
	return arr;
}

function match(myLottoNumbers) {
	const lottoNumbers = ranNumber();
	let count = 0;
	for (let i = 0; i < myLottoNumbers.length; i += 1) {
		const sinleMyLottoNumber = myLottoNumbers[i];

		if (lottoNumbers.indexOf(sinleMyLottoNumber) !== -1) {
			count += 1;
		}
	}
	return count;
}

let hasLotto = false;
let numberOfAttempt = 0;
const maxNumberOfAttempt = 10000;
let maxNumber = 0;
while (!hasLotto && maxNumberOfAttempt > numberOfAttempt) {
	numberOfAttempt += 1;

	const lotoNumbers = match([1, 2, 3, 4, 5, 6, 7]);
	console.log(`Trying ${numberOfAttempt} times!! I found  ${lotoNumbers} numbers`);
	if (lotoNumbers === 7) {
		hasLotto = true;
	}
	if (maxNumber < lotoNumbers) {
		maxNumber = lotoNumbers;
	}
}

console.log(`For ${numberOfAttempt} found the most ${maxNumber} numbers`);
