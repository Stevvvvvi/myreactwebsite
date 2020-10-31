import { CartActionTypes } from "./cart.types";
import { shopProduct } from "../../components/collection-item/collection-item.component";
import { addItemToCart } from "./cart.util";
export interface cartState{
    hidden:boolean,
    cartItems:cartItems[]
}
export interface cartItems extends shopProduct{
    quantity:number
}
const INITIAL_STATE:cartState={
    hidden:true,
    cartItems:[]
}


const cartReducer=(state=INITIAL_STATE,action: { type: any;payload:any })=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}
export default cartReducer;