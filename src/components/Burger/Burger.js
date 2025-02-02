import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
const burger = (props)=>{
    let ingredients =Object.keys( props.ingredients).map(ingredientKey=>{
        return [...Array(props.ingredients[ingredientKey])].map((_,i)=>{
            return <BurgerIngredient key={ingredientKey+i} type={ingredientKey}/>
        });
    }).reduce((arr,cur)=>{
        return arr.concat(cur);
    },[]);
    if (ingredients.length === 0) {
        ingredients = <p>Please add ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default burger;