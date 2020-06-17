import React from 'react'
import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
const modal = (props) => { 
    return (
        <Aux>
            <BackDrop show = {props.show} clicked = {props.purchasingCancled}></BackDrop>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translatey(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>

        </Aux>

    )
}

export default modal;