import React from 'react'
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = ( props ) =>{
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="Cheese"/>
            <BurgerIngredient type="Meat"/>
            <BurgerIngredient type="bread-bottom"/>
            <p>yo bro</p>
        </div>
    );

};

export default burger;

