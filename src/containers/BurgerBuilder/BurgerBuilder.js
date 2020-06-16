import React,{useState} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const IngredientPrice = {
    salad:0.5,
    cheese:0.5,
    meat:1.5,
    bacon:0.7
}
const BurgerBuilder = ()=>{
    const [burgerState, setburgerState] = useState({
        ingredients: {
            salad:0,
            bacom:0,
            cheese:0,
            meat:0
        },
        totalPrice:4.0

    });

    const addIngredientHandler = (type)=>{
        const oldCount = burgerState.ingredients[type];
        let updatedPrice = burgerState.totalPrice+IngredientPrice[type];
        let updatedIngredients = {...burgerState.ingredients};
        updatedIngredients[type]=oldCount+1
        setburgerState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice
        })
    }

    const removeIngredientHandler = (type)=>{

        const oldCount = burgerState.ingredients[type];
        if (oldCount === 0 ) {
            return;
        }
        let updatedPrice = burgerState.totalPrice-IngredientPrice[type];
        let updatedIngredients = {...burgerState.ingredients};
        updatedIngredients[type]=oldCount-1
        setburgerState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice
        })
    }

    let disabledInfo = {
        ...burgerState.ingredients
    }

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    

    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients}/>
            <BuildControls 
                ingredientAdded = {addIngredientHandler} 
                ingredientRemoved = {removeIngredientHandler} 
                disabled = {disabledInfo}
                price = {burgerState.totalPrice} />
        </Aux>
    )
}

export default BurgerBuilder;