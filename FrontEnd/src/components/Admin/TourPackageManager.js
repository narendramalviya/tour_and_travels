import React, { Component, Fragment } from "react";
import classes from "./TourPackageManager.css";
import { Link } from "react-router-dom";
import { allTourPackages } from "./api/apicalls";
import { API } from "../../backend";

class TourPackageManager extends Component {
	state = {
		tourPackages: [],
		isLoading: true,
		packageDeleteReqStatus: false,
	};
	componentDidMount() {
		//TODO: fire server request here
		console.log("[TourPackageManager]- componentDidMount");
		fetch(`${API}/tourPackages/allTourPackages`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({tourPackages:data,isLoading:false})
			});
	}

	deletePackageHandler = (id) => {
		alert("id:- " + id);
		//TODO: fire delete request here
		allTourPackages();
	};
	render() {
		let packageList = this.state.tourPackages;
		packageList = this.state.isLoading ? (
			<h1>Loading ... </h1>
		) : (
			<table className={classes.Table}>
				<tbody>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Country</th>
						<th>Price(Rs.)</th>
						<th>View</th>
						<th>Delete</th>
					</tr>
					{packageList.map((pkg) => (
						<tr key={pkg._id}>
							<td>{pkg._id}</td>
							<td>{pkg.title}</td>
							<td>{pkg.country}</td>
							<td>{pkg.price}</td>
							<td>
								<Link to={`${this.props.match.path}/${pkg._id}`}>
									View
								</Link>
							</td>
							<td>
								<button
									className="btn btn-danger m-2"
									onClick={() => {
										this.deletePackageHandler(pkg._id);
									}}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);

		return (
			<Fragment>
				<h1>THis is TourPackageManager</h1>
				{packageList}
			</Fragment>
		);
	}
}
export default TourPackageManager;
