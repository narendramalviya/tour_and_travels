import React from 'react';
import classes from './Button.css';
const button = (props) => {
    let atteachedClasses = [classes.Button,classes.btnType];
    return (

        <button onClick={props.clicked} className={atteachedClasses.join(' ')}>
            {props.children}
        </button>
       );
}

export default button;