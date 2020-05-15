import React, { Component } from "react";
import TourPackageContainer from "./TourPackageContainer";
import { Switch, Route } from "react-router-dom";
import Hotel from "../components/Hotel/Hotel";
import Flight from "../components/Flight/Flight";
import Train from "../components/Train/Train";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import TourPackages from "../components/TourPackages/TourPackages";
import SignIn from "../components/user/SignIn";
import SignUp from "../components/user/SignUp";
import AdminDashBoard from '../components/Admin/AdminDashBoard';
import UserDashBoard from '../components/user/UserDashBoard';
import Profile from '../components/user/Profile';

class MainContainer extends Component {
	render() {
		return (
			<div>
				
					<Route
						path="/"
				        exact
						render={() => <Home vllll="text value" />}
					/>

					<Route path="/hotel" component={Hotel} />
					<Route path="/flight" component={Flight} />
					<Route path="/train" component={Train} />
					<Route path="/about" component={About} />
					<Route
						path="/tour-packages"
						
						component={TourPackages}
					/>
					<Route path="/signin" component={SignIn} />

					<Route path="/signup" component={SignUp} />
					<Route path="/admin" component={AdminDashBoard} />
					<Route path="/user/dashboard" component={UserDashBoard} />
					{/* <Route path="/user/profile" exact component={Profile} /> */}
			
			</div>
		);
	}
}
export default MainContainer;
