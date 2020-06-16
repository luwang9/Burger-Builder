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
        totalPrice:4

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

    const IngredientHandler = (type)=>{
        const oldCount = burgerState.ingredients[type];
        let updatedIngredients = {...burgerState.ingredients};
        updatedIngredients[type]=oldCount+1
        setburgerState({
            ingredients:updatedIngredients
        })


    }

    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients}/>
            <BuildControls ingredientAdded = {addIngredientHandler} />
        </Aux>
    )
}

export default BurgerBuilder;