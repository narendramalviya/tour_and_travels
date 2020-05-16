import React, { Component ,Fragment} from "react";
import classes from "./TourPackageManager.css";
import { Link } from "react-router-dom";
// import viewIcon from "./view.png";
// import deleteButton from "./delete.png"

class TourPackageManager extends Component {
	state = {
		tourPackages: [
			{
				id: 1,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 2,
				title: "winter sesson at shimla!",
				country: "india",
				price: 70000,
			},
			{
				id: 3,
				title: "winter sesson at shimla!",
				country: "india",
				price: 70000,
			},
			{ id: 4, title: "holyday at taj!", country: "india", price: 70000 },
			{
				id: 5,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 6,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 7,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 8,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 9,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 10,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 11,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 12,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 13,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 14,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 15,
				title:"summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 16,
				title: "winter sesson at shimla!",
				country: "india",
				price: 70000,
			},
			{ id: 17, title: "holyday at taj!", country: "india", price: 70000 },
			{
				id: 18,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 19,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 20,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 21,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 22,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 23,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 24,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 25,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 26,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
			{
				id: 27,
				title: "summer holiday at goa!",
				country: "india",
				price: 60000,
			},
		],
		packageDeleteReqStatus:false

	};
	render() {
		let packageList = this.state.tourPackages;
		console.log("[Tour Package manager.js]", packageList);

		packageList = packageList.map((pkg) => {
			return (
				<tr key={pkg.id}>
					<td>{pkg.id}</td>
					<td>{pkg.title}</td>
					<td>{pkg.country}</td>
					<td>{pkg.price}</td>
					<td>
						<Link to={`${this.props.match.path}/${pkg.id}`}>
							View
						</Link>
					</td>
					<td>
						<button>Delete</button>
					</td>
				</tr>
			);
		});

		return (
			<Fragment>
				<h1>THis is TourPackageManager</h1>
				<table className={classes.Table}>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Country</th>
						<th>Price(Rs.)</th>
						<th>View</th>
						<th>Delete</th>
					</tr>
					{packageList}
				</table>
			</Fragment>
		);
	}
}
export default TourPackageManager;
