import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Aux from "../../hoc/Aux/Aux";
import classes from "./UserDashBoard.css";
import Profile from "./Profile";
import { Jumbotron, Card, CardGroup } from "react-bootstrap";

class UserDashBoard extends Component {
	state = {
		user: {
			id: "12333",
			name: "Narendra",
			lastname: "Malviya",
			email: "nkmalvia@test.com",
		},
		oders: "this is user orders",
	};

	render() {
		console.log("[userDashboard]");

		return (
			<Aux>
				<Jumbotron style={{ width: "90%", margin: "auto" }}>
					<CardGroup style={{ width: "90%" }}>
						<Card style={{ width: "200px" }}>
							<ul>
								<li>
									<Link
										to={`${this.props.match.path}/profile`}
									>	
									Profile
									</Link>
								</li>
								<li>
									<Link
										to={`${this.props.match.path}/orders`}
									>
										Orders
									</Link>
								</li>
								<li>
									<Link to={`${this.props.match.path}/etc`}>
										Etc
									</Link>
								</li>
							</ul>
						</Card>
						<Card>
							<Route
								path={`${this.props.match.path}/profile`}
								render={() => <Profile />}
							/>
							<Route
								path={`${this.props.match.path}/orders`}
								render={() => <h1>Orders</h1>}
							/>
							<Route
								path={`${this.props.match.path}/etc`}
								render={() => <h1>etc</h1>}
							/>
						</Card>
					</CardGroup>
				</Jumbotron>
			</Aux>
		);
	}
}
export default UserDashBoard;
