import React from 'react';

const SignInForm = (props)=>{
		 const {email,password} = props.user;
		 const {handleChange,submitHandler} = props
        return (
			<div className="container-sm">
				<form>
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
			
				{"email: " + email + " password "+ password}
	
				
			</div>
		);
}
export default SignInForm;