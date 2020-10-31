import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import DirectoryMenu from './views/directory-menu/directoryMenu';
import {Redirect, Route,Switch} from 'react-router-dom';
import ShopPage from './views/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignup from './views/sigin-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect, RootStateOrAny } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { AuthUser, UserState } from './redux/user/user.reducer';
import { rootState } from './redux/root-reducer';
import { selectCurrentUser } from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';


const Topic=(props:any)=>{
  console.log(props);
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

interface props extends mapStateInterface{
  setCurrentUser:typeof setCurrentUser
}


function App(props: props) {
  //const [user,setUser]=useState<userProps>({ currentUser:  null });
  useEffect(()=>{
    const {setCurrentUser}=props;
    let unSubscribeFromAuth: { (): void; (): void; } | null=null;
    unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if (userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef?.onSnapshot(snapShot=>{
          setCurrentUser({currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        })
        });
        //console.log(user);
      }else{
        setCurrentUser({currentUser:userAuth})
        //console.log(user);
      }
      //setUser({currentUser:user});
      //console.log(user);
    })
    return ()=>{
      unSubscribeFromAuth && unSubscribeFromAuth()
    }
  },[auth.currentUser])
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={DirectoryMenu}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/login' render={()=>props.currentUser ? (<Redirect to='/' /> ):(<SigninAndSignup />)} />
      </Switch>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edittt <code>src/App.tsxxxxx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
interface mapStateInterface{
  currentUser:AuthUser|null
}
const mapStateToProps=createStructuredSelector<rootState,mapStateInterface>({
  currentUser:selectCurrentUser
})
// old mapstate to prop way
const mapStateToPropss=({user:{currentUser}}:rootState)=>({
  currentUser:currentUser
})
const mapDispatchToProps=(dispatch: (arg0: { type: string; payload: UserState; }) => any)=>({
  setCurrentUser:(user: UserState)=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
