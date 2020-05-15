import React from "react";
// import from ''
import classes from "./Header.css";
import { NavLink, Redirect } from "react-router-dom";
const header = () => {
	return (
		<div className={classes.Header}>
			<ul className={classes.Items}>
				<li>
					<NavLink to="/" className='active'>Home</NavLink>
				</li>
				<li>
					<NavLink to="/tour-packages">Tour-Packages</NavLink>
				</li>
				<li>
					<NavLink to="/flight">Flight</NavLink>
				</li>
				<li>
					<NavLink to="/train">Train</NavLink>
				</li>
				<li>
					<NavLink to="/hotel">Hotel</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				
				<li>
					<NavLink to="/admin">Admin-Dash</NavLink>
				</li>
				<li>
					<NavLink to="/user/dashboard">User-Dash</NavLink>
				</li>
				<li>
					<NavLink to="/signin">Sign in</NavLink>
				</li>
			
				<li>
					<NavLink to="/signup">Sign up</NavLink>
				</li>
				<li>
					<span onClick={()=>{
						// TODO: complete this!!
						alert("signed out clicked!!");
					return <Redirect to="/signup" />
					}}>Sign out</span>
				</li>
			</ul>
		</div>
	);
};

export default header;
