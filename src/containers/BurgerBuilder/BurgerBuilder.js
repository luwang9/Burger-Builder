import React,{useState} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
const BurgerBuilder = ()=>{
    const [burgerState, setburgerState] = useState({
        ingredients: {
            salad:0,
            bacom:0,
            cheese:0,
            meat:0
        }
    });

    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients}/>
            <div>BuildControls</div>
        </Aux>
    )
}

export default BurgerBuilder;