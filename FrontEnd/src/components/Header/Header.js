import React from "react";
// import from ''
import classes from "./Header.css";
import { NavLink, withRouter } from "react-router-dom";
import { signout, isAuthenticate, isAdmin } from "../user/api/userApi";
import { Fragment } from "react";
const header = (props) => {
	return (
		<div className={classes.Header}>
			<ul className={classes.Items}>
				<li>
					<NavLink to="/" className="active">
						Home
					</NavLink>
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
					{isAuthenticate() && isAdmin() ? (
						<NavLink to="/admin">Admin-Dash</NavLink>
					) : (
						isAuthenticate() && (
							<NavLink to="/user/dashboard">User-Dash</NavLink>
						)
					)}
				</li>
				{ isAuthenticate() ? (
					<li>
						<span
							onClick={() => {
								signout(() => props.history.push("/"));
							}}
						>
							Sign out
						</span>
					</li>
				) : (
					<Fragment>
						<li>
							<NavLink to="/signin">Sign in</NavLink>
						</li>

						<li>
							<NavLink to="/signup">Sign up</NavLink>
						</li>
					</Fragment>
				)}
			</ul>
		</div>
	);
};

export default withRouter(header);
