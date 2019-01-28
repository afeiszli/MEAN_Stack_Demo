var express = require('express');
var router = express.Router();

var Employee = require('../models/employee');

//Get Companies
router.get('/companies', function(req, res, next){
	Employee.find.distinct('company', function(err, companies){
		if(err){
			res.send(err);
		} else {
			res.json(companies);
		}
	});
});

module.exports = router
