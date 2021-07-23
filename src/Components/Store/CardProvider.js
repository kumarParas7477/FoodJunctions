import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}


const CartReducer = (state, action) => {
    if (action.type == 'ADD') {
        const updatedTotalAmount = state.totalAmount + (action.item.amount * action.item.price);

        const existingCartItemIndex = state.items.findIndex((item) => item.id == action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;
        if (existingCartItem) {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }
        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    else if (action.type == 'DELETE') {
        console.log(state.items);
        const existingCartItemIndex = state.items.findIndex((item) => item.id == action.id);
        const removeItem = state.items[existingCartItemIndex];
      
        let  updatedItems = [...state.items];
        if (removeItem.amount > 1) {
            let updatedItem = { ...removeItem, amount: removeItem.amount-- };
           
            updatedItems[removeItem] = updatedItem;
        }
        else {
            updatedItems.splice(existingCartItemIndex,1);        
        }
        const updatedTotalAmount = state.totalAmount - removeItem.price;
        return { items: updatedItems, totalAmount: updatedTotalAmount }

    }
}

const CartProvider = (props) => {
    const [cartState, dispathCartAction] = useReducer(CartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {

        dispathCartAction({ type: 'ADD', item: item })
    }

    const removeItemFromCartHandler = (id) => {

        dispathCartAction({ type: 'DELETE', id: id })

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;