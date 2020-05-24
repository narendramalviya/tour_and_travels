import React, { Component } from "react";
import classes from "./AdminDashBoard.css";
import { Link, Route } from "react-router-dom";
import Profile from "../user/Profile";
import TourPackageManager from "./TourPackageManager";
import ViewPackage from "./ViewPackage";
class AdminDashBoard extends Component {
	render() {
		// console.log(Profile);
		
		return (
			<div className={classes.container}>
				<div className={classes.heading}>
					<h1>WelCome Admin!!</h1>
				</div>
				<div className={classes.sectionContainer}>
					<div className={classes.leftNavContainer}>
						<li>
							<Link to={`${this.props.match.path}/profile`}>
								Profile
							</Link>{" "}
						</li>
						<li>
							<Link to={`${this.props.match.path}/tourpackages`}>
								Tour Packages
							</Link>{" "}
						</li>

						<li>
							<Link
								to={`${this.props.match.path}/packageinquiry`}
							>
								Package Inquiry
							</Link>{" "}
						</li>
					</div>
				{/*Routes  */}

					<div className={classes.rightContainer}>
						<Route
							path={`${this.props.match.path}/profile`}
							component={Profile}
						/>
						<Route
							exact
							path={`${this.props.match.path}/tourpackages`}
							component={TourPackageManager}
						/>
						<Route path={`${this.props.match.path}/tourpackages/:id`} component={ViewPackage}/>
						<Route
							path={`${this.props.match.path}/packageinquiry`}
							render={() => (
								<div>
									<h1>packageinquiry</h1>
								</div>
							)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default AdminDashBoard;
