import { CartActionTypes } from "./cart.types";
export interface cartState{
    hidden:boolean
}
const INITIAL_STATE:cartState={
    hidden:true
}

const cartReducer=(state=INITIAL_STATE,action: { type: any; })=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        default:
            return state;
    }
}
export default cartReducer;