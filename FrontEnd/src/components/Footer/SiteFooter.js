import React from 'react';
import classes from './SiteFooter.css';

const SiteFooter = () => {
    return (
        <div className={classes.SiteFooter}>
            <ul className={classes.Items}>

                <li ><a href="/">Home</a></li>
                <li><a href="/">Tour</a></li>
                <li><a href="/">Package</a></li>
                <li><a href="/">Flight</a></li>
                <li><a href="/">Train</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About</a></li>

            </ul>

        </div>
    );
};

export default SiteFooter;