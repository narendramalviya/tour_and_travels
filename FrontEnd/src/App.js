import React, { Component } from "react";
import classes from "./App.css";
import Layout from "./hoc/Layout/Layout";
import Header from "./components/Header/Header";
// import SiteFooter from "./components/Footer/SiteFooter";
import MainContainer from "./container/MainContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
	render() {		
		return (			
				<div className={classes.App}>
					<Layout>
						<Header />
						<MainContainer />

						{/* <SiteFooter /> */}
					</Layout>
				</div>
	
		);
	}
}

export default App;
