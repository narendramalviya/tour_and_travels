import React from 'react';

const SignUpForm = (props)=>{
		 const {name,lastname,email} = props.user;
		 const {handleChange,submitHandler} = props
        return (
			<div className="container-sm">
				<form>
					<div className="form-group">
						<label htmlFor ="name">Name</label>
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastname">Last Name</label>
						<input
							type="text"
							className="form-control"
							id="lastname"
							name="lastname"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="InputEmail1">Email address</label>
						<input
							type="email"
							className="form-control"
							id="InputEmail1"
							name="email"
							onChange={handleChange}
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					
					<div className="form-group">
						<label htmlFor="InputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="InputPassword1"
							name="password"
							onChange={handleChange}
						/>
					</div>

					<button
						type="submit"
						className="btn btn-primary"
						onClick={submitHandler}
					>
						Submit
					</button>
				</form>
				{"name:" + name + " "} {" lastname:" + lastname + " "}
				{"email: " + email + " "}
	
				
			</div>
		);
}
export default SignUpForm;