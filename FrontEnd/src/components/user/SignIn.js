import React, { Component } from "react";
import { signin, authenticate } from "./api/userApi";
import Aux from "../../hoc/Aux/Aux";
import Spinner from "../../hoc/UI/Spinner/Spinner";
import SignInForm from "./api/SignInForm";
import { Redirect } from "react-router-dom";
export default class SignIn extends Component {
	state = {
		values: {
			email: "test1@mail.com",
			password: "1234",
		},
		isLoading: false,
		error: null,
		success: false,
		redirect:false
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			values: { ...this.state.values, [name]: value },
		});
	};
    performRedirect =()=>{
        if(this.state.redirect){
			return <Redirect to='/' />
		}
	}
	submitHandler = (event) => {
		event.preventDefault();
		this.setState({ isLoading: true });
		// TODO:fire signin request here??
		signin(this.state.values)
			.then((data) => {
				console.log(data);
				if (data.error) {
					this.setState({
						error: JSON.stringify(data.error),
						isLoading: false,
						success: false,
					});
				} else {
					authenticate(data, () => {
						this.setState({
							success: true,
							error: null,
							isLoading: false,
							redirect:true
						});
					});
				}
			})
			.catch((error) => {
				this.setState({
					error: "failed to fetch",
					isLoading: false,
					success: false,
				    redirect:false
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
			<p>user successfully signedIn</p>
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
				{this.performRedirect()}
				{successElement}
				{errorElement}
				{this.state.isLoading ? (
					spinner
				) : (
					<SignInForm

						user={this.state.values}
						handleChange={this.handleChange}
						submitHandler={this.submitHandler}
					/>
				)}
			</Aux>
		);
	}
}
