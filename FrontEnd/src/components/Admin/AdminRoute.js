import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate, isAdmin } from "../user/api/userApi";

const AdminRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>(
			isAuthenticate() && isAdmin() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: "/signin", state: props.location }} />
			))
		}
	/>
);

export default AdminRoute;
