import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo
} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import {connect, RootStateOrAny } from 'react-redux';
import { ReducerStateProps } from '../../redux/root-reducer';
import CartIcon from '../cart-icon/cart-icon.component';

interface props{
    currentUser:any;
}
const Header=({currentUser}:props)=>{
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to="/shop">
                    Shop
                </Link>
                <Link className='option' to="/contact">
                    Contact
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='/login'>Sign In</Link>
                }
                <CartIcon />
            </div>
        </div>

        
    )
}
const mapStateToProps=(state: RootStateOrAny)=>({
    currentUser:state.user.currentUser
})
export default connect<ReducerStateProps>(mapStateToProps)(Header);