var express = require('express');
var router = express.Router();

var Employee = require('../models/employee');

//Get Employees
router.get('/employees', function(req, res, next){
	Employee.find(function(err, employees){
		if(err){
			res.send(err);
		} else {
			res.json(employees);
		}
	});
});

//Create User
router.post('/employee', function(req, res, next){
	//var employee = req.body;
	var employee = new Employee({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		address: req.body.address,
		company: req.body.company,
		salary: req.body.salary
	});
	
	employee.save(function(err, employee){
		if(err){
			res.json({msg: 'Failed to add employee: ' + err});
		} else{
			res.json(employee);
		}
	});
});

//Get Companies
router.get('/companies', function(req, res, next){
        Employee.find().distinct('company', function(err, companies){
                if(err){
                        res.send(err);
                } else {
                        res.json(companies);
                }
        });
});

//Get Company Costs
router.get('/costs/:company', function(req, res, next){
	Employee.aggregate([{
		$match : { company: req.params.company}},{
		$group : { _id: req.params.company, salary_sum: { $sum : "$salary" }}}], function(err, result){
                if(err){
                        res.send(err);
                } else {
                        res.json(result);
                }
        });
});

//Delete Employee
router.delete('/employee/:id', function(req, res, next){
        Employee.remove({_id: req.params.id}, function(err, result){
                if(err){
                        res.send(err);
                } else {
                        res.json(result);
                }
        });
});

module.exports = router
