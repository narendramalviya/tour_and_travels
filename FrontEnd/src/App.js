import React, { Component } from "react";
import classes from "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Header from "./components/Header/Header";
import SiteFooter from "./components/Footer/SiteFooter";
import MainContainer from "./container/MainContainer";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className={classes.App}>
					<Layout>
						<Header />
						<MainContainer />

						<SiteFooter />
					</Layout>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
