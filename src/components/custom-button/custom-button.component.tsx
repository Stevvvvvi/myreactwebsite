import React from 'react'
import { JsxElement } from 'typescript';

import './custom-button.styles.scss';

interface props{
    children:string;
    type?:'submit'|'button';
    onClick?:((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
    isGoogleSignIn?:boolean;
    inverted?:boolean;
}
const CustomButton=({children,isGoogleSignIn,inverted,...otherProps}:props)=>{
    return <button className={`${isGoogleSignIn && 'google-sign-in'} custom-button ${inverted && 'inverted'}`} {...otherProps}>
        {children}
    </button>
        
}

export default CustomButton;