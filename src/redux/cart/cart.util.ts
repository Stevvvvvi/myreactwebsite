import { shopProduct } from "../../components/collection-item/collection-item.component";
import { cartItems } from "./cart.reducer";

export const addItemToCart=(cartItems:cartItems[],cartItemToAdd:shopProduct)=>{
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id==cartItemToAdd.id
    );
    if (existingCartItem){
        return cartItems.map(cartItem=>
            cartItem.id==cartItemToAdd.id ?
            {...cartItem,quantity:cartItem.quantity+1}
            :
            cartItem
            )
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}];
}