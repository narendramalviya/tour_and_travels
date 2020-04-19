const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	discription: {
		type: String,
		required: true, 
		trim: true,
	},
	country: {
		type: String,
		required: true,
		trim: true,
	},
	state: {
		type: String,
		trim: true,
	},

	city: {
		type: String,
		trim: true,
	},
	Address: {
		type: String,
		trim: true,
	},
	price: {
		type: Number,
		require: true,
	},
});

module.exports = mongoose.model("tour_packages",packageSchema);
