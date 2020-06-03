require("dotenv").config();
const express = require("express");
const dbConfig = require("./config/database.config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");
const cookieParser = require("cookie-parser");
// require routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const tourPackageRoutes = require("./routes/tour_package");
//create express app
const app = express();

//setting header using cors to accept cross requests
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of content-type - application/json
app.use(bodyParser.json());
// cookie parser
app.use(cookieParser());
mongoose.Promise = global.Promise;

//Connecting to the database
mongoose
	.connect(dbConfig.url, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Successfully connected to the database");
	})
	.catch((err) => {
		console.log("Could not connect to the database. Exiting now...", err);
		process.exit();
	});

app.get("/", (req, res) => {
	res.send("Home page");
});

// ---------------------------------------------------


// test routes
 app.get("/setCookie", (req, res) => {
 	// res.header('Access-Control-Allow-Credentials', true);
 	// res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

	res.cookie("newcookie","7742401557",{"expire":400000+Date.now()});
	res.send("cookie set");
});
app.get("/getCookie", (req, res) => {
	res.send(req.cookies['newcookie']);
});


// ---------------------------------------------------

// routes
app.use("/api", tourPackageRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);


//listen the requests
const port = 7000;
app.listen(port, () => console.log(`Server listing at port ${port}`));
