import React from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((key) => {
        return (
            <li>
                <span style={{ textTransform: 'capitalize' }}>{key}</span>
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

            <p><strong>Total Price : {props.price} </strong></p>
            <p> Continue to check out?</p>
            <Button btnType="Danger" clicked={props.purchasingCancled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>

    )
}

export default orderSummary;