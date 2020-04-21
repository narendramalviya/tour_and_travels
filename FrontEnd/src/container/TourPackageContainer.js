import React, { Component } from "react";
import TourPackages from '../components/TourPackages/TourPackages';


class TourPackageContainer extends Component {
	  state = {
		  
	  }
	render() {
		console.log('ToutpakcgesContainer.js - ',this.props);
		
		return(
			<TourPackages />
		);
	}
}

export default TourPackageContainer;
