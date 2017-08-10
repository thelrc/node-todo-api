const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5984f3bf7ddb8c30141485e9';
// var id = '598a134c5521fa09cc55a171';

// if(!ObjectID.isValid(id)) {
// 	console.log('ID is not Vaild');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
	if(!user) {
		return console.log('Id not found');
	}
	console.log('User id', user);
}).catch((e) => console.log(e));