import React from 'react';
import classes from './Header.css';

const header = () => {
    return (
        <div className={classes.Header}>
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

export default header;