const {MongoClient, ObjectID} = require("mongodb"); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');


	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('597fbc79b737f4120d6a2adf')
	}, {
		$set: {
			name: 'ramos'
		}, 
		$inc: {
			age:1
		}
	}, {
		returnOrginal: false
	}).then((result) => {
		console.log(result);
	});
	
	//takes four arguments
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('597fe1f500f4276de2ea01f2')
	// }, {
	// 	$set : {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOrginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });
	//db.close();
});
