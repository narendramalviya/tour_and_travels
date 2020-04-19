import React, { Component } from 'react';
import classes from './TourPackage.css';
// import Button from '../../../hoc/UI/Button/Button';
class tourPackage extends Component {
	
	render() {
		return (
		
			<div className={classes.TourPackage} >
				<h3>{this.props.tourPkge.title}</h3>
				<p>{this.props.tourPkge.country}  </p>
                <p>{this.props.tourPkge.price} rs. </p>
			    <button className={classes.btn} onClick={this.props.clicked}>View Package </button>
			</div>
		);
	}
}

export default tourPackage;
