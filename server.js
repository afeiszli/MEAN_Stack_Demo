//modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var index = require('./routes/index');
var employees = require('./routes/employees');

var app = express();

//port #
const port = 3000;

//MongoDB Connection
mongoose.connect('mongodb://localhost:27017/employees_db');
mongoose.connection.on('connected', function(){
	console.log('connected to mongodb on port 27017');
});
mongoose.connection.on('error', function(err){
	if(err){
	        console.log('MongoDB Error: ' + err);
	}
});

app.use(express.static(path.join(__dirname, 'views')));

//middleware
app.use(cors());

app.use(bodyParser.json());

//routes
app.use('/', index);
app.use('/api/', employees);

app.listen(port, function(){
	console.log('Server started on port ' + port);
});

