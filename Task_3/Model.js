const fs = require('fs');

class Model {
	constructor(modelName, Array) {
		this.modelName = modelName;
		this.Array = Array;
	}

	findAll(object, limit) {
		let findFile = fs.readFileSync(this.modelName + ".json");
		let json = JSON.parse(findFile);
		return json.filter((item, index) => {
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
		let findFile = fs.readFileSync(this.modelName + ".json");
		let json = JSON.parse(findFile);
		return json[index];
	}

	findById(id) {
		let findFile = fs.readFileSync(this.modelName + ".json");
		let json = JSON.parse(findFile);
		return json.filter((model) => {
			if (model.id === id) {
				return model;
			}
		});
	}

	add(object) {
		if (fs.existsSync(this.modelName + '.json')) {
			let prepJson = fs.readFileSync(this.modelName + '.json');
			let json = JSON.parse(prepJson);
			json.push(object);
			fs.writeFileSync(this.modelName + '.json', JSON.stringify(json, null, 2));
		} else {
			fs.writeFileSync(this.modelName + '.json', JSON.stringify(this.Array, null, 2));
		}
	}

	update(index, newValue) {
		let readFile = fs.readFileSync(this.modelName + '.json');
		let data = JSON.parse(readFile);
		data[index] = {
			...data[index],
			...newValue
		};
		fs.writeFileSync(this.modelName + '.json', JSON.stringify(data, null, 2));
	}

	remove(index) {
		let readFile = fs.readFileSync(this.modelName + '.json');
		let data = JSON.parse(readFile);
		data.splice(index, 1);
		fs.writeFileSync(this.modelName + '.json', JSON.stringify(data, null, 2));
	}
}

module.exports = Model;

