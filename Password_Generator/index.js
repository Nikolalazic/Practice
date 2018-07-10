function checkUpperCaseChars(string) {
	for (let i = 0; i < string.length; i += 1) {
		if (/[A-Z]/.test(string.charAt(i))) {
			return true;
		}
	}
	return false;
}

function checkNumberChars(string) {
	for (let i = 0; i < string.length; i += 1) {
		if (/[0-9]/.test(string.charAt(i))) {
			return true;
		}
	}
	return false;
}

function generatePassword(number, lvl) {
	const set1 = 'abcdefghijklmnopqrstuvwxyz';
	const set2 = set1.toUpperCase();
	const set3 = '0123456789';
	let pass = '';

	let ob = set1;
	if (lvl > 1) {
		ob += set2;
	}
	if (lvl === 3) {
		ob += set3;
	}
	if (lvl !== 1 && lvl !== 2 && lvl !== 3) {
		return 'Range of numbers must be between 1 and 3';
	}
	if ((number >= 5) && (number <= 20)) {
		for (let i = 0; i < number; i += 1) {
			pass += ob.charAt(Math.floor(Math.random() * ob.length));
		}
	} else {
		return 'Password must be at least 5, and less than 20';
	}

	if (lvl !== 1 && !checkUpperCaseChars(pass)) {
		pass = pass.slice(0, -1);
		pass += pass.charAt().toUpperCase();
	}
	if (!checkNumberChars(pass) && (lvl === 3)) {
		pass = pass.slice(1);
		pass = set3.charAt(Math.floor(Math.random() * set3.length)) + pass;
	}
	return pass;
}
console.log(generatePassword(21, 2));
