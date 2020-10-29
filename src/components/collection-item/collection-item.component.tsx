import React from 'react';

import './collection-item.styles.scss';

export interface collectionProps{
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

const CollectionItem=({id,name,price,imageUrl}:collectionProps)=>(
    <div className='collection-item'>
        <div className='image'
        style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)
export default CollectionItem;