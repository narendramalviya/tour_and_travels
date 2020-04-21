import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import TourPackages from "../TourPackages/TourPackages";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

export default class Home extends Component {
	render() {
		return <Aux>
           <WelcomeSection/>
           <TourPackages/>
        </Aux>;
	}
}
