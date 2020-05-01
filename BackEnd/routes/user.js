const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { check } = require("express-validator");
const {
	getUserById,
	getUser,
	deleteUser,
	getAllUsers,
	updateUser,
} = require("../controllers/user");

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
// params
router.param("userId", getUserById);

// read
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.get("/users/:userId", isSignedIn, isAuthenticated, isAdmin, getAllUsers);

// update
router.put(
	"/user/:userId",
	[
		check("name", "name should be at least 4 char").isLength({ min: 4 }),
		check("email", "email must be require").isEmail(),
	],
	isSignedIn,
	isAuthenticated,
	updateUser
);

// TODO: complete delete route
// delete
router.delete("/user/", (req, res) => {
	res.send("deleted user route");
});

module.exports = router;
