import React from 'react';
import Signin from '../../components/sigin-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import "./sign-in-and-sign-up.styles.scss";


const SigninAndSignup=()=>{
    return (
        <div className='signin-and-signup'>
            <Signin />
            <SignUp />
        </div>
    )
}

export default SigninAndSignup;