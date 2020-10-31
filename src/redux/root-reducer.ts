import userReducer, { UserState }  from './user/user.reducer';
import {combineReducers} from 'redux';
import cartReducer, { cartState } from './cart/cart.reducer';

export interface rootState{
    user:UserState,
    cart:cartState
}

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});

