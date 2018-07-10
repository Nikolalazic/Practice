const  UserControl  = require('./Model');
const jsonTest = [];
const test = new UserControl("dule", jsonTest);
// add objects
test.add({id: "1", name: "Nikola", lastName: "Lazic", userName:"Niki"});
test.add({id: "2", name: "Dejan", lastName: "Lazic", userName:"Deja"});
test.add({id: "3", name: "Marija", lastName: "Lazic", userName:"Mara"});
test.add({id: "4", name: "Zoran", lastName: "Lazic", userName:"Zoka"});
test.add({id: "5", name: "Zeljko", lastName: "Lazic", userName:"Zelja"});
test.add({id: "6", name: "Ruzica", lastName: "Lazic", userName:"Ruki"});
 test.add({id: "13", name: "Bogdan", lastName: "Bogicevic", userName:"Bogi"});
test.add({id: "8", name: "Suzana", lastName: "Lazic", userName:"Suza"});
// test.add({id: "9", name: "Neki novi name", lastName: "Neko novo prezime", userName:"neki novi nick"});
//
// test.add({id: "12", name: "Neki novi name", lastName: "Lazic", userName:"drago"});
// test.save();
//console.log(test.update(3, {name: "Dunave dunave"}));
//console.log(test.findByIndex(3));
//  console.log(test.findAll({lastName: "Lazic"}, 5));
// test.remove(0);
//test.save();
// console.log('------------------------------')
//console.log(test.findAll({lastName: "Lazic"}, 5));
//console.log(test.findById("9"));
// console.log(test.update(2, {name:"Marinko"}));
// console.log(test.findAll({lastName: "Lazic"}, 10));




