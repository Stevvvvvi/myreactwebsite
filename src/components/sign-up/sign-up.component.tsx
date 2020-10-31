import React, { ChangeEvent, FormEvent, useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';


const SignUp=()=>{
    const [signUpInfo,setSignUpInfo]=useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    const handleSubmit=async (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=signUpInfo;
        if (password!=confirmPassword){
            alert("password don't match");
            return;
        }
        try{
            const {user} =await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});
            setSignUpInfo({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
            })
        }catch(e){
            console.log(e);
        }
    }
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;
        setSignUpInfo({...signUpInfo,[name]:value});
    }
    const {displayName,email,password,confirmPassword}=signUpInfo;

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} label='Display Name' required handleChange={handleChange}></FormInput>
                <FormInput type='email' name='email' value={email} label='Email' required handleChange={handleChange}></FormInput>
                <FormInput type='password' name='password' value={password} label='Password' required handleChange={handleChange}></FormInput>
                <FormInput type='password' name='confirmPassword' value={confirmPassword} label='Confirm Password' required handleChange={handleChange}></FormInput>
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )

}

export default SignUp;