import React, { Component } from "react";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import TourPackageContainer from "./TourPackageContainer";
class MainContainer extends Component {
	state = {

	}
	render() {
		return (
			<div>
			   <WelcomeSection />
               
				<TourPackageContainer />
			</div>
		);
	}
}
export default MainContainer;
