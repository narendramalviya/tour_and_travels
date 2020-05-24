import React, { Fragment, Component } from "react";
import { API } from "../../backend";

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
	// shouldComponentUpdate(nextProps,nextState){
	// 	console.log('[ViewPackage]- shouldComponentUpdate');
	// 	// if()
	// 	return true;
	// }
	// componentDidUpdate(){
	// 	console.log('[ViewPackage]- componentDidUpdate');
	// }
	// componentWillUnmount(){
	// 	console.log('[ViewPackage]- componentWillUnmount');
	// }
	editButtonHandler = () => {
		this.setState({ showUpdateForm: true });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({
			success: true,
			showUpdateForm: false,
			error: false,
		});
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
		const { title, country, price } = this.state.tourPackage;

		let packageDetails = this.state.showUpdateForm ? (
			<form>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						className="form-control"
						id="title"
						aria-describedby="title"
						placeholder="Enter title"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="country">Country</label>
					<input
						type="text"
						className="form-control"
						id="country"
						placeholder="enter country"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price">Price</label>
					<input
						type="text"
						className="form-control"
						id="price"
						placeholder="enter price"
					/>
				</div>

				<button
					onClick={this.submitHandler}
					className="btn btn-primary"
				>
					Submit
				</button>
			</form>
		) : (
			!this.state.isLoading && (
				<div>
					<h3>id : {this.props.match.params.id}</h3>
					<h3>title : {title}</h3>
					<h3>country : {country}</h3>
					<h3>price : {price}</h3>
					<button onClick={this.editButtonHandler}>Edit</button>
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
				<h1>view</h1>
				{packageDetails}
				{successElement}
				{errorElement}
			</Fragment>
		);
	}
}

export default ViewPackage;
