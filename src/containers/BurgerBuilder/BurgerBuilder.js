import React from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
const BurgerBuilder = ()=>{
    return (
        <Aux>
            <Burger/>
            <div>BuildControls</div>
        </Aux>
    )
}

export default BurgerBuilder;