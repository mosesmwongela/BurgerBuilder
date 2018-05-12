import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //Object.keys() - extract the keys of a given object and makes an array
    //map() -> executes a function on each input of the array


    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
           return <BurgerIngredient key = {igKey +1} type={igKey} />
        });
    });
    return (
        <div className={classes.Burger}>   
        <BurgerIngredient type="bread-top" />
       {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;