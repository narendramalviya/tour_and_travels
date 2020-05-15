const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
	signin,
	signout,
	signup,
	isSignedIn,
	isAuthenticate,
	isAdmin,
} = require("../controllers/auth");

const { getUserById } = require("../controllers/user");

// params
router.param("userId", getUserById);
// sign in

router.post(
	"/user/signin",
	[
		check("email", "email must be require").isEmail(),

		check("password", "password must be at least 4 char").isLength({
			min: 4,
		}),
	],
	signin
);

// signUp
router.post(
	"/user/signup",
	[
		// firstname must be at least 3 chars long
		check("name", "name must be at least 3 char").isLength({
			min: 3,
		}),
		// lastname must be at least 3 chars long
		check("lastname", "lastname must be at least 3 char").isLength({
			min: 3,
		}),
		check("email", "email must be require").isEmail(),
		check("password", "password must be at least 3 char").isLength({
			min: 3,
		}),
	],
	signup
);

// signOut

router.get("/user/signout/:userId", signout);

module.exports = router;
