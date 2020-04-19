import React from 'react'
import classes from './Layout.css';

 const layout = (props) =>{
    return (
        <div className={classes.Layout}>
           {props.children}
        </div>
    )
}

export default layout;
