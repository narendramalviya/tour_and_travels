import React, { Component } from "react";
import { signup } from "./api/userApi";
import SignUpForm from "./api/SignUpForm";
import Aux from "../../hoc/Aux/Aux";
import Spinner from "../../hoc/UI/Spinner/Spinner";
export default class SignUp extends Component {
	state = {
		values: {
			name: "test1",
			lastname: "test1lastName",
			email: "test1@mail.com",
			password: 1234,
		},
		isLoading: false,
		error: null,
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
		this.setState({ isLoading: true });
		//TODO:fire signup request here??
		signup(this.state.values)
			.then((data) => {
				console.log(data);
				if (data.error) {
					this.setState({
						error: JSON.stringify(data.error),
						isLoading: false,
						success: false,
					});
				} else {
					this.setState({ success: true, error: null });
					setTimeout(() => {
						this.props.history.push("/signin");
					}, 3000);
				}
			})
			.catch((error) => {
				this.setState({
					error: "error at server" + JSON.stringify(error),
					isLoading: false,
					success: false,
				});
				console.log(error);
			});
	};
	errorMessage = () => (
		<div className="alert alert-danger" role="alert">
			<p> getting some error</p>
			{this.state.error}
		</div>
	);

	successMessage = () => (
		<div className="alert alert-success" role="alert">
			<p>user successfully signedUp</p>
		</div>
	);

	render() {
		const spinner = <Spinner />;
		const successElement = this.state.success
			? this.successMessage()
			: null;
		const errorElement = this.state.error ? this.errorMessage() : null;
		return (
			<Aux>
				{successElement}
				{errorElement}
				{this.state.isLoading ? (
					spinner
				) : (
					<SignUpForm
						user={this.state.values}
						handleChange={this.handleChange}
						submitHandler={this.submitHandler}
					/>
				)}
			</Aux>
		);
	}
}
