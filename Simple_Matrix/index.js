function getMatrix(length) {
	const Matrix = [];
	for (let i = 0; i < length; i += 1) {
		Matrix[i] = [];
		for (let y = 0; y < length; y += 1) {
			Matrix[i][y] = true;
		}
	}
	return Matrix;
}

console.log(getMatrix(10));