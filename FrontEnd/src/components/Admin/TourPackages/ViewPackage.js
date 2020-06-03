import React, { Fragment, Component } from "react";
import { API } from "../../../backend";
import { updateTourPackage } from "../api/apicalls";
import { isAuthenticate } from "../../user/api/userApi";
import TourPackageForm from "./TourPackageForm";

class ViewPackage extends Component {
	state = {
		tourPackage: {},
		isLoading: false,
		error: false,
		success: false,
		showUpdateForm: false,
	};

	componentDidMount() {
		//TODO: fire server request here
		this.setState({ isLoading: true });
		console.log("[ViewPackage]- componentDidMount");
		fetch(`${API}/tourPackages/${this.props.match.params.id}`)
			.then((response) => response.json())
			.then((data) =>
				this.setState({ tourPackage: data, isLoading: false })
			)
			.catch((err) => {
				this.setState({ isLoading: false });
				console.log(err);
			});
	}
	handleChange = (event) => {
		const { name, value } = event.target;
		let updatedState = { ...this.state.tourPackage };
		updatedState = { ...updatedState, [name]: value };
		this.setState({ tourPackage: updatedState });
	};
	editButtonHandler = () => {
		this.setState({ showUpdateForm: true });
	};

	submitHandler = (event) => {
		event.preventDefault();
		const data = isAuthenticate();
		console.log(data);

		if (data) {
			updateTourPackage(this.state.tourPackage, data.token, data.user._id)
				.then((data) => {
					console.log(data);
					this.setState({
						success: true,
						showUpdateForm: false,
						error: false,
					});
				})
				.catch((err) => console.log(err));
		}

		//TODO:fire update user request here??
	};
	errorMessage = () => (
		<div class="alert alert-danger" role="alert">
			<p>some error occur</p>
			{this.state.error}
		</div>
	);

	successMessage = () => (
		<div className="alert alert-success" role="alert">
			<p>Package updated successfully!!</p>
		</div>
	);

	render() {
		const { title, country, description, price } = this.state.tourPackage;

		let packageDetails = this.state.showUpdateForm ? (
			<TourPackageForm
				handleChange={this.handleChange}
				submitHandler={this.submitHandler}
				data={this.state.tourPackage}
			/>
		) : (
			!this.state.isLoading && (
				<div
					className="card"
					style={{ width: "60rem", padding: "5px" }}
				>
					<div class="card-header">Package Details</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							id : {this.props.match.params.id}
						</li>
						<li class="list-group-item">title : {title}</li>
						<li class="list-group-item">country : {country}</li>
						<li class="list-group-item">
							description : {description}
						</li>
						<li class="list-group-item">price : {price}</li>
					</ul>
					<button className="btn btn-success" onClick={this.editButtonHandler}>Edit</button>
				</div>
			)
		);

		const successElement = this.state.success
			? this.successMessage()
			: null;
		const errorElement = this.state.error ? this.errorMessage() : null;
		if (this.state.isLoading) {
			packageDetails = <h1>Loading ...</h1>;
		}
		return (
			<Fragment>
				{packageDetails}
				{successElement}
				{errorElement}
			</Fragment>
		);
	}
}

export default ViewPackage;
