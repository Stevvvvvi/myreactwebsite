import React from 'react';

import './menu-item.styles.scss'

interface props{
    title:string;
    imageUrl:string;
    size:string|undefined;
}
const MenuItem=({title,imageUrl,size}:props)=>{
    return (
        <div className={`menu-item ${size}`}>
            <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='content'>
                <h1 className='title'>{title.toLocaleUpperCase()}</h1>
                <span className='subtitle'>this one</span>
            </div>
        </div>
    )
}

export default MenuItem;