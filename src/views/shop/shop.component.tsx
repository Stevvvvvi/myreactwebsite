import React, { useState } from 'react';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import SHOP_DATA from './shop.data';

const ShopPage=()=>{
    const [shop,setShop]=useState({collections: SHOP_DATA})

    return (
        <div className='shop-page'>
            {
                shop.collections.map(({id,...otherProps})=>(
                    <CollectionPreview key={id} {...otherProps}></CollectionPreview>
                ))
            }
        </div>
    )
}
export default ShopPage;