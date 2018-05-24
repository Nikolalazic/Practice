//const arrayObj = require('./users');
class UserControl {
	constructor(userArray) {
		this.userArray = userArray;
	}

	findAll(object, limit) {
		// let findAll = [];
		return this.userArray.filter((item, index) => {
			const prepItem = item[Object.keys(object)[0]];
			const prepObject = Object.values(object)[0];
			if (index < limit) {
				if (prepItem === prepObject) {
					return item;
				}
			}
		});
	}

	findByIndex(index) {
		return this.userArray[index];
	}

	findById(id) {
		return this.userArray.filter((user) => {
			if (user.id === id) {
				return user;
			}
		});
	}

	add(object) {
		this.userArray.push(object);
	}

	update(index, newValue) {
		return this.userArray[index] = {
			...this.userArray[index],
			...newValue
		}
	}


	remove(index) {
		const removeUser = this.userArray.splice(this.userArray[index], 1);
		this.userArray.push(removeUser);
	}
}
module.exports = UserControl;
//const newArray = new UserControl(arrayObj);

// console.log(newArray.findByIndex(2));
//console.log(newArray.findById("user.deactivated"));
//console.log(newArray.add("Neki novi id", "Nikola Lazic"));
//console.log(newArray.remove(4));
//console.log(newArray.findAll({customerIo: "YES",}, 1));
//console.log(newArray.update(2, {"name": "dragan",}));
