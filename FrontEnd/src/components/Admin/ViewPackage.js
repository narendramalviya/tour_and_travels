import React, {Fragment, Component } from "react";
export default class ViewPackage extends Component {
	state = {
		tourPackage: {
			id: 7,
			title: "summer holiday at goa!",
			country: "india",
			price: 60000,
		},
		error: false,
		success: false,
		showSuccessMessege: false,
		showUpdateForm: false,
	};

	componentDidMount() {
		//TODO: fire server request here
	}
	editButtonHandler = () => {
		this.setState({ showUpdateForm: true });
	};
	submitHandler = (event) => {
		event.preventDefault();
		this.setState({
			showSuccessMessege: true,
			success: true,
			showUpdateForm: false,
			showPackageDetails: true,
		});
		//TODO:fire update user request here??
	};
	errorMessage = () => (
		<div class="alert alert-danger" role="alert">
			<p>some error occur</p>
			{this.state.error}
		</div>
	);

	successMessage = () => {
		setTimeout(() => {
			this.setState({ showSuccessMessege: false });
		}, 1000);
		return (
			<div class="alert alert-success" role="alert">
				<p>Package updated successfully!!</p>
			</div>
		);
	};

	render() {
		const packageForm = this.state.showUpdateForm ? (
			<form>
				<div class="form-group">
					<label for="title">Title</label>
					<input
						type="text"
						class="form-control"
						id="title"
						aria-describedby="title"
						placeholder="Enter title"
					/>
					
				</div>
				<div class="form-group">
					<label for="country">Country</label>
					<input
						type="text"
						class="form-control"
						id="country"
						placeholder="enter country"
					/>
				</div>
				
				<button onClick={this.submitHandler} class="btn btn-primary">
					Submit
				</button>
			</form>
		) : null;
		const { id, title, country, price } = this.state.tourPackage;
		const successElement = this.state.showSuccessMessege
			? this.successMessage()
			: null;
		const errorElement = this.state.error ? this.errorMessage() : null;
		const showPackageDetails = this.state.showPackageDetails ? (
			<div>
				{successElement}
				{errorElement}
				<h3>id : {this.props.match.params.id}</h3>
				<h3>title : {title}</h3>
				<h3>country : {country}</h3>
				<h3>price : {price}</h3>
				<button onClick={this.editButtonHandler}>Edit</button>b{" "}
			</div>
		) : null;

		return <Fragment>
            {successElement}
            
        </Fragment>
	}
}
