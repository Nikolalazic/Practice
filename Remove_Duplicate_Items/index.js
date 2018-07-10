function removeDuplicateItems(items) {
	const arrayItems = [];
	items.forEach((i) => {
		if (arrayItems.indexOf(i) < 0) {
			arrayItems.push(i);
		}
	});
	return arrayItems;
}

console.log(removeDuplicateItems([23, 12, 23, 14, 15, 1, 1, 14, 14, 14, 24, 26, 26, 27, 29]));
