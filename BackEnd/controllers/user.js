const express = require("express");
const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.getUserById = (req, res, next, id) => {
	User.findById(id, (err, user) => {
		if (err || !user) {
			res.status(404).json({
				message: "user not found!!" + err,
			});
		}

		req.profile = user;
	});
	next();
};

exports.getUser = (req, res) => {
	const user = req.profile;
	user.encry_password = undefined;
	user.salt = undefined;
	res.json(user);
};

exports.updateUser = (req, res) => {
	// check error
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(422).json({
			errors: errors.array(),
		});
	}
	User.findByIdAndUpdate(
		{ _id: req.profile._id },
		{ $set: req.body },
		{ new: true, useFindAndModify: false },
		(err, user) => {
			if (err) {
				return res.status(400).json({
					error: "You are not autherized to update this user",
				});
			}
			user.encry_password = undefined;
			user.salt = undefined;
			res.json(user);
		}
	);
};

exports.getAllUsers = (req, res) => {
	res.json({
		message: "get all routes ",
	});
};

exports.deleteUser = (req, res) => {
	User.findByIdAndRemove({ _id: req.profile._id }, (err) => {
		if (err) {
			res.status(500).json({
				error: err + "failed to remove user",
			});
		}
		res.json({
			message: "user successfully removed!",
		});
	});
};
