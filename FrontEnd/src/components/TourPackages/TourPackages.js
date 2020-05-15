import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import TourPackage from "./TourPackage/TourPackage";
import classes from "./TourPackages.css";
import axios from "axios";
// import FullPackage from './FullPackage/FullPackage';

class TourPackages extends Component {
	state = {
		tour_packages: null,
		selectedPackage: null,
		selectedPackageId: null,
	};

	UNSAFE_componentWillMount() {
		axios
			.get("http://localhost:7000/api/tourPackages/allTourPackages")
			.then((responce) => {
				this.setState({ tour_packages: responce.data });
			})
			.catch((error) => {
				console.log("somthing getting wrong" + error);
			});

		console.log("[TourPackages.js] componentWillMount");
	}

	packageClickedHandler = (id) => {
		let allPackages = this.state.tour_packages;
		let post = allPackages.find((item) => item._id === id);

		this.setState(
			{
				selectedPackage: post,
			},() => {
				console.log(this.state.selectedPackage);
			}
		);
		
	};

	render() {
		console.log("[tourPackages.js ] ");

		let tour_packages = this.state.tour_packages;
		if (tour_packages) {
			tour_packages = tour_packages.slice(0, 10);
			// console.log(tour_packages);
			tour_packages = tour_packages.map((pkg, index) => (
				<li key={index}>
					<TourPackage
						tourPkge={pkg}
						clicked={() => this.packageClickedHandler(pkg._id)}
					/>
				</li>
			));
		}
		return (
			<Aux>
				<div className={classes.Packages}>
					<section>
						<div style={{ textAlign: "center", margin: "10px" }}>
							<h1>World Tour Packeges</h1>
							Welcome to a soulful experience of vacationing in
							India, the cradle of ancient civilization with rich
							cultural heritage. Experience the sights and sounds
							of its amazing diversity that is embedded in its
							geography, people and their cultures. Explore the
							gifts of nature and the timeless marks of man-kind
							that dot the landscape of this country.
						</div>
					</section>
					<ul className={classes.UL}> {tour_packages} </ul>

					<div
						style={{
							textAlign: "center",
							margin: "10px",
							float: "left",
						}}
					>
						<a href="/">more...</a>
					</div>
					{this.state.selectedPackage ? (
						<div>
							<h1>Id :- {this.state.selectedPackage._id}</h1>
							<h1>Title :- {this.state.selectedPackage.title}</h1>
							<p>{this.state.selectedPackage.body}</p>
						</div>
					) : (
						<p>Select package</p>
					)}
				</div>
			</Aux>
		);
	}
}

export default TourPackages;
