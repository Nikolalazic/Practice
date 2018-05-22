const arrayObj = require('./users');

class UserControl {
	constructor(userArray){
		this.userArray = userArray;
	}

	findByIndex(index){
		return this.userArray[index];
	}

	findById(id){
		const findUser = this.userArray.filter((user) => {
			if(user.id === id){
				return user ;
			}
		});
		return findUser;
	}
}

const newArray = new UserControl(arrayObj);

// console.log(newArray.findByIndex(2));

console.log(newArray.findById("user.deactivated"));



