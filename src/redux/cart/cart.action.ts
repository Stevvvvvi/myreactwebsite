import { shopProduct } from "../../components/collection-item/collection-item.component";
import { CartActionTypes } from "./cart.types";

export const toggleCartHidden=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem=(item: shopProduct)=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})