const express = require('express');
const dbConfig = require('./config/database.config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');

//create express app
const app = express();

//setting header using cors to accept cross requests
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.url,{
	useNewUrlParser:true
}).then(()=>{
	console.log("Successfully connected to the database");  
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
	 res.send('Home page');
});

//Require package routes
require('./routes/tourPackage.routes')(app);

//listen the requests
const port = 7000;
app.listen(port, () => console.log(`Server listing at port ${port}`));