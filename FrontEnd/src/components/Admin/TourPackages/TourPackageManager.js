import React, { Component, Fragment } from "react";
import classes from "./TourPackageManager.css";
import { Link } from "react-router-dom";
import { allTourPackages, deleteTourPackage } from "../api/apicalls";
import Spinner from "../../../hoc/UI/Spinner/Spinner";
import { isAuthenticate } from "../../user/api/userApi";

class TourPackageManager extends Component {
	state = {
		tourPackages: [],
		isLoading: true,
		packageDeleteReqStatus: false,
		error: false,
	};
	fetchTourPackage = ()=>{
		allTourPackages().then((data) => {
			console.log(data);
			this.setState({ tourPackages: data, isLoading: false });
		});
	}
	componentDidMount() {
		this.fetchTourPackage();
	}

	deletePackageHandler = (id) => {
		const data = isAuthenticate();
		this.setState({ isLoading: true, error: false });
		deleteTourPackage(id, data.token, data.user._id)
			.then((data) => {
				console.log(data);
				this.fetchTourPackage()
			})
			.catch((err) => {
				console.log(err);
				this.setState({ isLoading: false, error: err });
			});
	};
	render() {
         
		let packageList = this.state.tourPackages;
		packageList = this.state.isLoading ? (
			<Spinner />
		) : (
			<table className={classes.Table}>
				<tbody>
					<tr>
						<th>SR.</th>
						<th>Id</th>
						<th>Title</th>
						<th>Country</th>
						<th>Price(Rs.)</th>
						<th>View</th>
						<th>Delete</th>
					</tr>
					{packageList.map((pkg, index) => (
						<tr key={pkg._id}>
							<td>{index}</td>
							<td>{pkg._id}</td>
							<td>{pkg.title}</td>
							<td>{pkg.country}</td>
							<td>{pkg.price}</td>
							<td>
								<Link
									to={`${this.props.match.path}/${pkg._id}`}
								>
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
				<h1 className="text text-info">Tour Package Manager</h1>
				<Link className="btn btn-success m-1" to={`${this.props.match.path}/create`} >Create New Package</Link>
				{packageList}
			</Fragment>
		);
	}
}
export default TourPackageManager;
