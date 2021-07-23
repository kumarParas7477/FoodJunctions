import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    const [btnIsHIghlighted, setButtonIsHighlighted] = useState(false);
    const ctx = useContext(CartContext);

    const {items} = ctx;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(()=>setButtonIsHighlighted(false),100);

        return ()=>{clearTimeout(timer)}
    }, [items])

    const noOfcartItems = items.reduce((currNumber, item) => { return currNumber + item.amount }, 0)
    const btnClasses = `${classes.button} ${btnIsHIghlighted ? classes.bump : ''}`;

    return <button className={btnClasses} {...props}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{noOfcartItems}</span>
    </button>
}

export default HeaderCartButton;