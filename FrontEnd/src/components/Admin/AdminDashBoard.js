import React, { Component } from "react";
import classes from "./AdminDashBoard.css";
import { Link } from "react-router-dom";
import Profile from "../user/Profile";
import TourPackageManager from "./TourPackages/TourPackageManager";
import ViewPackage from "./TourPackages/ViewPackage";
import AdminRoute from "./AdminRoute";
import {  } from "../user/api/userApi";

class AdminDashBoard extends Component {
	render() {
		// console.log(Profile);
		
		return (
			<div className="jumbotron">
			
				<div className="bg bg-success p-2">
					<h1 className="text text-white">Wel-Come Admin!!</h1>
				</div>
				<div className={classes.sectionContainer}>
					<div className={classes.leftNavContainer}>
						<li>
							<Link to={`${this.props.match.path}/profile`}>
								Profile
							</Link>
						</li>
						<li>
							<Link to={`${this.props.match.path}/tourpackages`}>
								Tour Packages
							</Link>
						</li>

						<li>
							<Link
								to={`${this.props.match.path}/packageinquiry`}
							>
								Package Inquiry
							</Link>
						</li>
					</div>
				
				{/*Routes  */}

					<div className={classes.rightContainer}>
						<AdminRoute

							path={`${this.props.match.path}/profile`}
							component={Profile}
						/>
						<AdminRoute
							exact
							path={`${this.props.match.path}/tourpackages`}
							component={TourPackageManager}
						/>
							<AdminRoute
							exact
							path={`${this.props.match.path}/tourpackages/create`}
							component={TourPackageManager}
						/>
						<AdminRoute path={`${this.props.match.path}/tourpackages/:id`} component={ViewPackage}/>
						<AdminRoute
							path={`${this.props.match.path}/packageinquiry`}
							component={() => (
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
