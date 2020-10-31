import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo
} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import {connect, RootStateOrAny } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { AuthUser, UserState } from '../../redux/user/user.reducer';
import { cartState } from '../../redux/cart/cart.reducer';
import { rootState } from '../../redux/root-reducer';

interface props{
    currentUser:AuthUser|null;
    hidden:boolean;
}
const Header=({currentUser,hidden}:props)=>{
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
            {
                !hidden &&<CartDropDown />
            }
            
        </div>

        
    )
}
const mapStateToProps=({user:{currentUser},cart:{hidden}}: rootState)=>({
    currentUser:currentUser,
    hidden:hidden
})
export default connect(mapStateToProps)(Header);