//import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
//import Navbar from "./Navbar";

import Header from './Header';
//import Contact from './Contact';
import Footer from "./Footer";
import Login  from "./login";
import Signup from './Signup';

class App extends React.Component {

  render(){
    return (
      <Router>

      <div className="container">
          <div className="row">
              <Header/>
              {/* <Navbar /> */}
          </div>

          <div className="row">
            <div className="col-9">
              <Switch>
                <Route exact path="/loginform" component={Home} />
                <Route exact path="/about" component={About} />
                {/* <Route exact path="/contact" component={Contact} />
                <Route exact path="/services" component={Contact} />
                <Route exact path="/faq" component={Contact} /> */}
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={Login} />
              </Switch>
            </div>

            <div className="row">
            <Footer/>
          </div>
        </div>


      </div>
      </Router>
    )
  }
}

export default App;
 

      


















  // return (
  //   <>
  //     <switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>

  //       <Route exact path="/Loginform">
  //         <LoginForm />
  //       </Route>

  //       <Route exact path="/signup">
  //         <Signup />
  //       </Route>


  //     </switch>
  //   </>

    // <div>
    //   <Home />
    //   <Header />
    //   <LoginForm />
    //   <Signup />
    //   <Footer />
    // </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header>
    // </div>
  {/* );
}

export default App */}
