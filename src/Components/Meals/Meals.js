import React,{ Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary"
import classes from "./Meals.module.css";
const Meals = () =>{
return <div className={classes.meals}>
    <MealsSummary />
    <AvailableMeals />
</div>
}
export default Meals;