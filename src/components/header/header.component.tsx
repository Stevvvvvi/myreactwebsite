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
import { setCurrentUser } from '../../redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

interface props extends mapStateInterface{
    setCurrentUser:typeof setCurrentUser;
}
const Header=({currentUser,hidden,setCurrentUser}:props)=>{
    const signOut=async ()=>{
        await auth.signOut();
        setCurrentUser({currentUser:null})
    }
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
                    <div className='option' onClick={signOut}>Sign Out</div>
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
interface mapStateInterface{
    currentUser:AuthUser|null;
    hidden:boolean
}
const mapStateToProps=createStructuredSelector<rootState,mapStateInterface>({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
const mapDispatchToProps=(dispatch: any)=>({
    setCurrentUser:(user:UserState)=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);