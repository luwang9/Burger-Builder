import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
    {label:'Salad' , type : 'salad'},
    {label:'Meat', type : 'meat'},
    {label:'Cheese', type : 'cheese'},
    {label:'Bacon', type : 'bacon'}

]
const buildControls = (props)=>(
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price} </strong> </p>
        {controls.map(ele=>(
            <BuildControl 
                key = {ele.label} 
                label = {ele.label } 
                removed = {()=>props.ingredientRemoved(ele.type)}
                added = {()=>props.ingredientAdded(ele.type)}
                disabled = {props.disabled[ele.type]} />
        ))}
        <button 
            className= {classes.OrderButton}
            onClick = {props.purchasing}
            disabled = {!props.purchasable}  >Order Now</button>
    </div>
)

export default buildControls;