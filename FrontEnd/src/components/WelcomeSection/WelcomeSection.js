import React from 'react';
import classes from './WelcomeSection.css';
// import image from '../../assets/atanas.jpg';
const welcomeSection = () => {
    // const imgStyle = {
    //     height: 'inherit',
    //     width: 'inherit'
    // }
    return (
        <section className={classes.WelcomeSection}>
            {/* <img style={imgStyle} src={image} alt='travelimg' /> */}
            <h1 style={{ textAlign: 'center' }}>Welcome Section</h1>
        </section>
    );
}
export default welcomeSection;