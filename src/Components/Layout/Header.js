import React, { Fragment } from "react";
import classes from './Header.module.css';
import mealsimage from '../../assets/mealsParantha.jpg';
import pizza from "../../assets/pizza.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <div className={classes.titleAndImage}>
            <img className={classes.pizza} src={pizza} height="50px" width="50px" />
            <h1>Foodie Junction</h1>
            </div>
            <HeaderCartButton onClick={props.onShowHideCart}/>
        
        </header>
       
    </Fragment>
}

export default Header;