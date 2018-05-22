const arrayObj = require('./users');

class UserControl {
	constructor(userArray) {
		this.userArray = userArray;
	}

	findByIndex(index) {
		return this.userArray[index];
	}

	findById(id) {
		const findUser = this.userArray.filter((user) => {
			if (user.id === id) {
				return user;
			}
		});
		return findUser;
	}

	add(object) {
		const users = this.userArray;
		users.push(object);
		console.log(users);
	}
	remove(index) {
		const users = this.userArray;
		const removeUser = users.splice(users[index], 1);
		users.push(removeUser);
		console.log(users);
	}
}

const newArray = new UserControl(arrayObj);

// console.log(newArray.findByIndex(2));
//console.log(newArray.findById("user.deactivated"));
//console.log(newArray.add("Neki novi id", "Nikola Lazic"));

console.log(newArray.remove(2));


