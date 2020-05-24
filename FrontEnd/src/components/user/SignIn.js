import React, { Component } from "react";

export default class SignIn extends Component {
	state = {
		values: {
			email: "nk@malviya.com",
			password: "1234",
		},
		error: false,
		success: false,
		redirect: false,
	};

	changeHandler = (name) => {
		return (event) => {

			this.setState({
				values: { [name]: event.target.value },
			});
		};
	};
	render() {
		const { email, password,error,success,redirect } = this.state.values;
		return (
			<div className="container-sm">
				<form>
					<div className="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							onChange={this.changeHandler("email")}
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							onChange={this.changeHandler("password")}
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
				{"email: " + email + " "}
				{"password:" + password + " "}
				{"error:" +  error+ " "}
				{"success:" + success + " "}
				{"redirect:" + redirect + " "}
			</div>
		);
	}
}
