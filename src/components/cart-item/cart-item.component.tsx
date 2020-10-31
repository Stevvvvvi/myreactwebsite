import React from 'react';
import { cartItems } from '../../redux/cart/cart.reducer';
import { shopProduct } from '../collection-item/collection-item.component';

import './cart-item.styles.scss';
interface props{
    item:cartItems
}
const CartItem=({item:{imageUrl,price,name,quantity}}:props)=>{
    return <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x {price}</span>
        </div>
    </div>
}

export default CartItem;