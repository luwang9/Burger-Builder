import React from 'react'
import classes from './Modal.module.css';
const modal = (props)=>{
    return (
        <div 
            className = {classes.Modal} 
            style = {{
                transform: props.show? 'translatey(0)' : 'translateY(-100vh)',
                opacity :  props.show? '1' : '0'
            }}
           >
            {props.children}
        </div>
    )
}

export default modal;