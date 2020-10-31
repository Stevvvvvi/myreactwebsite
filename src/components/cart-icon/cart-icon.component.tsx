import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { rootState } from '../../redux/root-reducer';

import './cart-icon.styles.scss';
interface props{
    toggleCartHidden:typeof toggleCartHidden,
    itemCount:number
}
const CartIcon=({toggleCartHidden,itemCount}:props)=>{
    return <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>

    </div>
}
const mapStateToProps=(state:rootState)=>({
    itemCount:selectCartItemsCount(state)
})
const mapDispatchToProps=(dispatch: any)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);