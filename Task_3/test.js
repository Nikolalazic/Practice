const  UserControl  = require('./userControl');
const jsonTest = [];
const test = new UserControl(jsonTest);

// add objects
test.add({id: "1", name: "Nikola", lastName: "Lazic", userName:"Niki"});
test.add({id: "2", name: "Dejan", lastName: "Lazic", userName:"Deja"});
test.add({id: "3", name: "Marija", lastName: "Lazic", userName:"Mara"});
test.add({id: "4", name: "Zoran", lastName: "Lazic", userName:"Zoka"});
test.add({id: "5", name: "Zeljko", lastName: "Lazic", userName:"Zelja"});
test.add({id: "6", name: "Ruzica", lastName: "Lazic", userName:"Ruki"});
test.add({id: "7", name: "Zivota", lastName: "Lazic", userName:"Ziza"});
test.add({id: "8", name: "Suzana", lastName: "Lazic", userName:"Suza"});

//console.log(test.findByIndex(3));
// console.log(test.findAll({lastName: "Lazic"}, 5));
// test.remove(1);
// console.log('------------------------------')
// console.log(test.findAll({lastName: "Lazic"}, 5));

//console.log(test.findById("7"));

console.log(test.update(2, {borivoje:"Marinko"}));

 console.log(test.findAll({lastName: "Lazic"}, 10));



