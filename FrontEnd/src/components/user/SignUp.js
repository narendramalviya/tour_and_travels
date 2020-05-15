import React, { Component } from "react";
// import { signup } from "./api/userApi";
import { API } from "../../backend";
import UserForm from "./api/UserForm";
import Aux from "../../hoc/Aux/Aux";

export default class SignUp extends Component {
	state = {
		values: {
			name: "test3",
			lastname: "test3lastname",
			email: "test3@mail.com",
			password: "1234",
		},
		error: false,
		success: false,
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			values: { ...this.state.values, [name]: value },
		});
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({ success: true }, () =>
			alert(JSON.stringify(this.state))
		);
		//TODO:fire signup request here??
	};
	errorMessage = () => (
		<div class="alert alert-danger" role="alert">
			<p>some error occur</p>
			{this.state.error}
		</div>
	);

	successMessage = () => (
		<div class="alert alert-success" role="alert">
			<p>user signedUp successfully</p>
		</div>
	);

	render() {
		const successElement = this.state.success
			? this.successMessage()
			: null;
		const errorElement = this.state.error ? this.errorMessage() : null;
		return (
			<Aux>
				{successElement}
				{errorElement}
				<UserForm
					user={this.state.values}
					handleChange={this.handleChange}
					submitHandler={this.submitHandler}
				/>
			</Aux>
		);
	}
}
