import React, { Fragment } from "react";
import classes from './Header.module.css';
import pizza from "../../assets/pizza.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <div className={classes.titleAndImage}>
            <img className={classes.pizza} src={pizza}  />
            <h2>Foodie Junction</h2>
            </div>
            <HeaderCartButton onClick={props.onShowHideCart}/>
        
        </header>
       
    </Fragment>
}

export default Header;