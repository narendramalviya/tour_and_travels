import React, { Component } from "react";
import axios from "axios";

class FullPackage extends Component {
	state = {
		tour_package: [],
		packageId: null,
		showPackage: false,
	};

	componentDidMount() {
		console.log("[FullPackage.js] componentDidMount");
	}
	shouldComponentUpdate(nextProp, nextState) {
		if (nextProp.id !== this.state.packageId) {
			axios
				.get(
					"https://jsonplaceholder.typicode.com/posts/1" + nextProp.id
				)
				.then((response) => {
					console.log(response);
					this.setState({ tour_package: response.data });
				});
			console.log(
				"[FullPackage.js shouldComponentUpdate] - ",
				nextProp,
				" ",
				nextState
			);
			return true;
		} else {
			return false;
		}
	}

	render() {
		console.log("[FullPackage.js] render()");

		let fullPackage = (
			<p>Please Select Package to full Package discription</p>
		);
		if (this.state.showPackage) {
			fullPackage = (
				<div>
					<h1>Id :- {this.state.tour_package._id}</h1>
					<h1>Title :- {this.state.tour_package.title}</h1>
					<p>{this.state.tour_package.body}</p>
				</div>
			);
		}
		return <div>{fullPackage}</div>;
	}
}

export default FullPackage;
