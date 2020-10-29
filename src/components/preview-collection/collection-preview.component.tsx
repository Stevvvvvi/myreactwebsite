import React from 'react';
import CollectionItem, { collectionProps } from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

interface props{
    title:string;
    items: collectionProps[];
}
const CollectionPreview=({title,items}:props)=>{
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((item,idx)=>idx<4)
                    .map(({id,...itemProps}:collectionProps)=>(
                        <CollectionItem key={id} id={id}{...itemProps}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;