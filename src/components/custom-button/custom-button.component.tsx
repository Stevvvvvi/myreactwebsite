import React from 'react'
import { JsxElement } from 'typescript';

import './custom-button.styles.scss';

interface props{
    children:string;
    type?:'submit'|'button';
    onClick?:((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
    isGoogleSignIn?:boolean;
}
const CustomButton=({children,isGoogleSignIn,...otherProps}:props)=>{
    return <button className={`${isGoogleSignIn && 'google-sign-in'} custom-button`} {...otherProps}>
        {children}
    </button>
        
}

export default CustomButton;