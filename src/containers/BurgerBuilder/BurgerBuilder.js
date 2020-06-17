import React,{useState} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
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
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
    });
    const [purchaseState, setPurchaseState] = useState({
        purchasable:false
    })

    const [purchasingState, setPurchasingState] = useState({
        purchasing:false
    })

    const purchasingHandler = ()=>{
        setPurchasingState({
            purchasing:true
        })
    }

    const purchasingCancleHandler = ()=>{
        setPurchasingState({
            purchasing:false
        })
    }


    const addIngredientHandler = (type)=>{
        const oldCount = burgerState.ingredients[type];
        let updatedPrice = burgerState.totalPrice+IngredientPrice[type];
        let updatedIngredients = {...burgerState.ingredients};
        updatedIngredients[type]=oldCount+1
        setburgerState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice,
        })
        updatePurchaseState(updatedIngredients);
    }
    const updatePurchaseState = (newIngredients)=>{
        const ingredients = {...newIngredients};
        const sum = Object.keys(ingredients).map((key)=>{
            return ingredients[key]
        }).reduce((sum,el)=>(sum+el),0);
        setPurchaseState({
            purchasable:sum>0
        });
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
            totalPrice:updatedPrice,

        })
        updatePurchaseState(updatedIngredients);
    }

    let disabledInfo = {
        ...burgerState.ingredients
    }

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    

    return (
        <Aux>
            <Modal show ={purchasingState.purchasing} purchasingCancled = {purchasingCancleHandler}  >
                <OrderSummary ingredients = {burgerState.ingredients} />
            </Modal>
            <Burger ingredients={burgerState.ingredients}/>
            <BuildControls 
                ingredientAdded = {addIngredientHandler} 
                ingredientRemoved = {removeIngredientHandler} 
                disabled = {disabledInfo}
                purchasable = {purchaseState.purchasable}
                purchasing = {purchasingHandler}
                price = {burgerState.totalPrice} />

        </Aux>
    )
}

export default BurgerBuilder;