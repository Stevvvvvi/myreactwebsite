import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

export interface shopProduct{
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}
export interface collectionProps{
    item:shopProduct;
    addItem:typeof addItem;
}

const CollectionItem=({item,addItem}:collectionProps)=>{
    const {id,name,price,imageUrl}=item;
    return (
    <div className='collection-item'>
        <div className='image'
        style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={()=>addItem(item)}>add to cart</CustomButton>
    </div>
)}
const mapDispatchToProps=(dispatch: (arg0: { type: string; payload: shopProduct; }) => any)=>({
    addItem:(item: shopProduct)=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);