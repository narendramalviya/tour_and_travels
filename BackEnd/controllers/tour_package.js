const Tour_package = require("../models/tour_package");
const { validationResult } = require("express-validator");

//Find a single tour package by packageId
exports.getTourPackageById = (req, res, next, id) => {
	Tour_package.findById(id)
		.exec((err, pkg) => {
			if (err || !pkg) {
				return res.json({
					error: err,
					message: "package not found!",
				});
			}
			req.tourPackage = pkg;
			next();
		});
};

exports.getTourPackage = (req, res) => {
	res.json(req.tourPackage);
};

//Create and save a new package
exports.createTourPackage = (req, res) => {
	const errors = validationResult(req.body);
	if (!errors.isEmpty()) {
		res.status(422).json({
			errors: errors.array(),
		});
	}

	//Create tour Package
	const tourPackage = new Tour_package(req.body);
	//save package in the database
	tourPackage.save((err, pkg) => {
		if (err) {
			res.json({
				error: "internal error,failed to save data in DB" + err,
			});
		}
		res.json({
			message: "package successfully created!!",
			tourPackage: pkg,
		});
	});
};

//Retrieve and return all Packages from the Database
exports.getAllTourPackages = (req, res) => {
	Tour_package.find({}, (err, tourPkgs) => {
		if (err || !tourPkgs) {
			res.status(500).send({
				error: err.message || "Some error occurred .",
			});
		}
		res.json(tourPkgs);
	});
};

//Update a Package identified by the PackageId in the request
exports.updateTourPackage = (req, res) => {
	const errors = validationResult(req.body);
	if (!errors.isEmpty()) {
		res.status(422).json({
			errors: errors.array(),
		});
	}

	Tour_package.findByIdAndUpdate(
		req.tourPackage._id,
		{
			...req.body,
		},
		{ new: true },
		(err, updatedPackage) => {
			if (err) {
				message: `failed to updating the package, given id ${req.tourPackage._id} ' ' ${err}`;
			}
			res.json(updatedPackage);
		}
	);
};

//Delete a package with the specified packageId in the request
exports.deleteTourPackage = (req, res) => {
	Tour_package.findByIdAndRemove(req.tourPackage._id, (err, tourPkg) => {
		if (err || !tourPkgs) {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Package not found with id " + req.tourPackage._id,
				});
			}
			return res.status(500).send({
				error: err,
				message:
					"Could not delete package with id " + req.tourPackage._id,
			});
		}
		res.json({
			tourPkg,
			message: "Successfully deleted ",
		});
	});
};
