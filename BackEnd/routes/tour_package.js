const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
	createTourPackage,
	getTourPackageById,
	getTourPackage,
	getAllTourPackages,
	updateTourPackage,
	deleteTourPackage,
} = require("../controllers/tour_package.js");

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// params
router.param("userId", getUserById);
router.param("packageId", getTourPackageById);

//Create new Package
router.post(
	"/tourPackages/create/:userId",
	[
		check("title", "title must be require at least 2 char").isLength({
			min: 2,
		}),
		check(
			"discription",
			"discription must be require at least 5 char"
		).isLength({ min: 5 }),
		check("country", "country must be require at least 2 char").isLength({
			min: 2,
		}),
		check("price", "price must be require at least 1 char").isLength({
			min: 1,
		}),
	],
	isSignedIn,
	isAuthenticated,
	isAdmin,
	createTourPackage
);

// read
router.get("/tourPackages/allTourPackages", getAllTourPackages);

//Retrieve single Package by id
router.get("/tourPackages/:packageId", getTourPackage);

//Update Package by packageId
router.put(
	"/tourPackages/:packageId/:userId",
	[
		check("title", "title must be require at least 2 char").isLength({
			min: 2,
		}),
		check(
			"description",
			"description must be require at least 5 char"
		).isLength({ min: 5 }),
		check("country", "country must be require at least 2 char").isLength({
			min: 2,
		}),
		check("price", "price must be require at least 1 char").isLength({
			min: 1,
		}),
	],
	isSignedIn,
	isAuthenticated,
	isAdmin,
	updateTourPackage
);

//Delete a Package by packageId
router.delete(
	"/tourPackages/:packageId/:userId",
	isSignedIn,
	isAuthenticated,
	isAdmin,
	deleteTourPackage
);

module.exports = router;
