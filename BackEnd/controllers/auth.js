const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// signin
exports.signin = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(422).json({
			error: errors.array(),
		});
	}
	const { email, password } = req.body;

	User.findOne({ email }, (err, user) => {
		if (err || !user) {
			return res.status(404).json({
				error: `User email does exist! err:${err}`,
			});
		}
		if (!user.authenticate(password)) {
			return res.status(404).json({
				error: "User email and password does not match!",
			});
		}
		// create token
		const token = jwt.sign({ id: user._id }, process.env.SECRET);
		// put token in cookie
		res.cookie("token", token, { expire: new Date() + 9999 });

		// send response to frontend
		const { _id, name, lastname, email, role, purchases } = user;
		return res.json({
			token,
			user: { _id, name, lastname, email, role, purchases },
		});
	});
};

// signup

exports.signup = (req, res) => {
	// check error
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({
			error: errors.array(),
		});
	}
	user = new User(req.body);
	user.save((err, user) => {
		if (err) {
			return res.status(400).json({
				error: `Not able to save user in DB ${err}`,
			});
		}
		const { _id, name, lastname, email, role, purchases } = user;
		return res.json({
			_id,
			name,
			lastname,
			email,
			role,
			purchases,
		});
	});
};

// signout
exports.signout = (req, res) => {
	// clear token
	res.clearCookie("token");
	res.send("user singed out");
};

// custome middleware
// console.log(process.env.SECRET);

exports.isSignedIn = expressJwt({
	secret: process.env.SECRET,
	userProperty: "auth",
});

// TODO: clear about isAuthen middlware
exports.isAuthenticated = (req, res, next) => {
	const checker = req.profile && req.auth && req.auth.id == req.profile._id;
	if (!checker) {
		return res.status(403).json({
			error: "ACCESS DENIED",
		});
	}
	next();
};

// user is Admin
exports.isAdmin = (req, res, next) => {
	if (req.profile.role === 0) {
		return res.status(403).json({
			error: "You are not Admin ,Access denied",
		});
	}
	next();
};
