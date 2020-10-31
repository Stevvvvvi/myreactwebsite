import React from 'react';
import { connect } from 'react-redux';
import { cartItems } from '../../redux/cart/cart.reducer';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { rootState } from '../../redux/root-reducer';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';


import './cart-dropdown.styles.scss';
interface props{
    cartItems:cartItems[]
}
const CartDropDown=({cartItems}:props)=>(
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps=(state:rootState)=>({
    cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);