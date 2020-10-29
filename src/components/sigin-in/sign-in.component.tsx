import React, { ChangeEvent, FormEvent, useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

const Signin=()=>{
    const [userInfo,setUserInfo]=useState({email:'',password:''})
    const handleSubmit=async (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setUserInfo({ email: '', password: '' });
        //console.log(userInfo);
    }
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        const {value,name}=event.target;
        setUserInfo({...userInfo,[name]:value})
        //console.log(userInfo);
    }
    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={userInfo.email} handleChange={handleChange} required label='Email'/>
                <FormInput name="password" type="password" value={userInfo.password} handleChange={handleChange} required label='Password' />
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    )
}

export default Signin;