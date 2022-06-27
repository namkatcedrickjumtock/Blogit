import React from 'react';
import "./Base.css";

const BaseSkeletons = ({ type }) => {
    const classes = `skeleton ${type}`
    return (
        <div className={classes}></div>
    );
}

export default BaseSkeletons;
