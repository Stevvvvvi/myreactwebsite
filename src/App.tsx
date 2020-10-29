import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DirectoryMenu from './views/directory-menu/directoryMenu';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './views/shop/shop.component';

const Topic=(props:any)=>{
  console.log(props);
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={DirectoryMenu}/>
        <Route path='/shop' component={ShopPage}/>
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

export default App;
