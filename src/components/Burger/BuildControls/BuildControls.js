import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
    {label:'Salad' , type : 'salad'},
    {label:'Meat', type : 'meat'},
    {label:'Cheese', type : 'cheese'}


]
const buildControls = (props)=>(
    <div className={classes.BuildControls}>
        {controls.map(ele=>(
            <BuildControl 
                key = {ele.label} 
                label = {ele.label } 
                added = {()=>props.ingredientAdded(ele.type)}/>
        ))}
    </div>
)

export default buildControls;