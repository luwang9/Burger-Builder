import React from 'react'
import Aux from '../../../hoc/Aux'
const orderSummary = (props)=>{
    const ingredientsSummary = Object.keys(props.ingredients).map((key)=>{
        return (
            <li> 
                <span style = {{textTransform:'capitalize'}}>{key}</span>
                 : 
                 {props.ingredients[key]} 
            </li>
        )
    })
    return (
        <Aux>
             <h3>Your Order</h3>
             <p>A delicious burger with the following ingredients:</p>
             <ul>
                {ingredientsSummary}
             </ul>
             <p> Continue to check out?</p>
        </Aux>
      
    )
}

export default orderSummary;