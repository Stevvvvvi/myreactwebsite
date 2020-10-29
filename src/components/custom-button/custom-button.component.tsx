import React from 'react'
import { JsxElement } from 'typescript';

import './custom-button.styles.scss';

interface props{
    children:string;
    type?:'submit';

}
const CustomButton=({children,...otherProps}:props)=>{
    return <button className='custom-button'{...otherProps}>
        {children}
    </button>
}

export default CustomButton;