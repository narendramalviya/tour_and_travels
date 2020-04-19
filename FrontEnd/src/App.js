import React, { Component } from 'react';
import classes from './App.css';
import Packages from './components/TourPackages/TourPackages';
import Layout from './hoc/Layout/Layout';
import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import SiteFooter from './components/Footer/SiteFooter';


class App extends Component {
 
  render() {
    return (
      <div className={classes.App}>
        <Layout >
          <Header />
          <WelcomeSection />
          <Packages />
         
          <SiteFooter />
        </Layout>
      </div>
    );
  }
}

export default App;
