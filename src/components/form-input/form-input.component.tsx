import React, { ChangeEvent } from 'react';

import './form-input.styles.scss';
interface props{
    handleChange:(event: ChangeEvent<HTMLInputElement>) => void;
    label?:string;
    value?:string;
    name?:string;
    type?:'email'|'password';
    required:boolean;
}
const FormInput=({handleChange,label,...otherProps}:props)=>{
    return (
        <div className="group">
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {
                label && 
                <label className={`${otherProps.value?.length && 'shrink' } form-input-label`}>
                    {label}
                </label>
            }
            <span className="border-animation left"></span>
            <span className="border-animation right"></span>
        </div>
    )
}

export default FormInput;