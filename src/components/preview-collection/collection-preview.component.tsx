import React from 'react';
import CollectionItem, { collectionProps, shopProduct } from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

interface props{
    title:string;
    items: shopProduct[];
}
const CollectionPreview=({title,items}:props)=>{
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((item,idx)=>idx<4)
                    .map((item:shopProduct)=>(
                        <CollectionItem key={item.id} item={item}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;