const mongoose = require('mongoose');

//schema for defining an employee
const EmployeeSchema = mongoose.Schema({
	first_name:{
		type: String,
		required: true
	},
	last_name:{
		type: String,
		required: true
	},
	address:{
		type: String,
		required: false
	},
	company:{
		type: String,
		required: true
	},
	salary:{
		type: Number,
		retuired: true
	}
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);
