import React, { Component } from "react";
import TourPackageContainer from "./TourPackageContainer";
import { Switch, Route } from "react-router-dom";
import Hotel from "../components/Hotel/Hotel";
import Flight from "../components/Flight/Flight";
import Train from "../components/Train/Train";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import TourPackages from "../components/TourPackages/TourPackages";

class MainContainer extends Component {
	state = {};
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" exact render={()=> <Home vllll="text value"/>}/>
						
					
					<Route path="/hotel" component={Hotel}/>
						
					
					<Route path="/flight" component={Flight}/>
						
					<Route path="/train" component={Train}/>
				
					<Route path="/about" component={About}/>
					<Route path="/tour-packages" component={TourPackages}/>
						
				</Switch>
			</div>
		);
	}
}
export default MainContainer;
