import React, { Component } from "react";
import UserForm from "./api/UserForm";
import Aux from "../../hoc/Aux/Aux";
import { Card } from "react-bootstrap";
export default class SignUp extends Component {
	state = {
		values: {
			name: "test3",
			lastname: "test3lastname",
			email: "test3@mail.com",
			role: 0,
		},
		error: false,
		success: false,
		showSuccessMessege: false,
		showUpdateForm: false,
		showUserDetails: true,
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			values: { ...this.state.values, [name]: value },
		});
	};
	editButtonHandler = () => {
		this.setState({
			showUpdateForm: true,
			showUserDetails: false,
		});
	};
	submitHandler = (event) => {
		event.preventDefault();
		this.setState({
			showSuccessMessege: true,
			success: true,
			showUpdateForm: false,
			showUserDetails: true,
		});
		//TODO:fire update user request here??
	};
	userDetails = () => {
		const { name, lastname, email, role } = this.state.values;
		return (
			<div className="">
			
					Name :{name} <br/>
					Last Name :{lastname}<br/>
					Email :{email}<br/>
					Role :{role}
			
			</div>
		);
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
				<p>user updated successfully</p>
			</div>
		);
	};
	render() {
		const successElement = this.state.showSuccessMessege
			? this.successMessage()
			: null;
		const errorElement = this.state.error ? this.errorMessage() : null;
		const userDetails = this.state.showUserDetails
			? this.userDetails()
			: null;
		const updateProfileForm = this.state.showUpdateForm ? (
			<UserForm
				user={this.state.values}
				handleChange={this.handleChange}
				submitHandler={this.submitHandler}
			/>
		) : null;

		const editButton = this.state.showUpdateForm ? null : (
			<button onClick={this.editButtonHandler}>Edit </button>
		);
		return (
			<Aux>
				<Card>
					<Card.Header>User Profile</Card.Header>
					{userDetails}
					{successElement}
					{editButton}
					{errorElement}
					{updateProfileForm}
				</Card>
			</Aux>
		);
	}
}
