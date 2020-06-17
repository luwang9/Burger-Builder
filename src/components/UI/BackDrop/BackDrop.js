import React from 'react'
import classes from './BackDrop.module.css'
const backDrop = (props)=>{
    if (props.show) {
        return (
            <div className = {classes.BackDrop} onClick  = {props.clicked}></div>
        )
    } else 
    return null;
} 

export default backDrop;