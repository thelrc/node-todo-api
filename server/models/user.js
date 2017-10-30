const mongoose = require('mongoose');
const validator = require('validator');


var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		unique: true,
		validate: validator.isEmail
	},
	password: {
		type: String,
		require: true,
		minlength: 6,
	},
	tokens: [{
		access: {
			type: String,
			require: true
		},
		token: {
			type: String,
			requried: true
		}
	}]
});

module.exports = {User};