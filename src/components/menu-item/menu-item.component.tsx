import React from 'react';
import {withRouter,RouteComponentProps} from 'react-router-dom';

import './menu-item.styles.scss'

interface props{
    title:string;
    imageUrl:string;
    size?:string;
    linkUrl:string;
}
const MenuItem=({title,imageUrl,size,history,linkUrl,match}:props & RouteComponentProps )=>{
    return (
        <div className={`menu-item ${size}`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
            <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='content'>
                <h1 className='title'>{title.toLocaleUpperCase()}</h1>
                <span className='subtitle'>this one</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);