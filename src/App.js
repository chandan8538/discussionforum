//import logo from './logo.svg';
import React from 'react'
import './App.css';

import Header from './Header';
import Footer from "./Footer";
import LoginForm  from "./loginform";
import Signup from './Signup';


// function App() {
  const App = () => {
  return (
    <div>
      <LoginForm />
      <Footer />
      <Signup />
    </div>




    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
