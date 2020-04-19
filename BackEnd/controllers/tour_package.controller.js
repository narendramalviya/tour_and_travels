const Tour_package = require("../models/tour_package.model");

//Create and save a new package
exports.create = (req, res) => {
	//Validate request
	if (!req.body) {
		return res.status(400).send({
			message: "Package can not be empty !",
		});
	}

	//Create tour Package
	const tourPackage = new Tour_package({
		title: req.body.title || "Untitled!",
		discription: req.body.discription,
		country: req.body.country,
		price: req.body.price,
	});

	//save package in the database
	tourPackage
		.save()
		.then((data) => {
			res.send({
				message: "package saved Successfully!",
				data: data,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the package.",
			});
		});
};

//Retrieve and return all Packages from the Database
exports.findAll = (req, res) => {
	Tour_package.find()
		.then((tourPkgs) => {
			if(!tourPkgs){
				res.status(500).send({
					message:
						err.message ||
						"Some error occurred .",
				});
			}
			
			res.send([...tourPkgs]);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred .",
			});
		});
};

//Find a single tour package
exports.findOne = (req, res) => {
	Tour_package.findById(req.params.packageId)
		.then((tourPkg) => {
			if (!tourPkg) {
				return res.status(404).send({
					message:
						"package not found with id " + req.params.packageId,
				});
			}
			res.send(tourPkg);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Package not found with id " + req.params.packageId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving package with id " + req.params.packageId,
			});
		});
};

//Update a Package identified by the PackageId in the request
exports.update = (req, res) => {
	Tour_package.findByIdAndUpdate(
		req.params.packageId,
		{
			title: req.body.title || "Untitled!",
			discription: req.body.discription,
			country: req.body.country,
			price: req.body.price,
		},
		{ new: true }
	)
		.then((tourPkg) => {
			if (!tourPkg) {
				return res.status(404).send({
					message: "package not found with id " + req.params.packageId,
				});
			}
			res.send(tourPkg);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"package not found with id " + req.params.packageId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating package with id " + req.params.packageId,
			});
		});
};

//Delete a package with the specified packageId in the request
exports.delete = (req, res) => {
	Tour_package.findByIdAndRemove(req.params.packageId)
		.then((tourPkg) => {
	 		if (!tourPkg) {
				return res.status(404).send({
					message: "Package not found with id" + req.params.packageId,
				});
			}
			res.send({ message: "Package deleted successfullly!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Package not found with id " + req.params.packageId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete package with id " + req.params.packageId,
			});
		});
};
