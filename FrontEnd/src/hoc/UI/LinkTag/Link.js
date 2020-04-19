import React from 'react';
import classes from './Link.css';
const link = (props)=>{
    return (
    <div className={classes.Link}>
      <a href={props.link}> {props.children}</a>
    </div>
    );    
}

export default link;