import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import logo from './images/logo/download.png';
import intro from './images/other/intro.jpg';
import pickacard from './images/other/pickacard.jpg';
import message from './images/other/message.png';
import address from './images/other/address.png';
import './App.css';
import Header from './components/header/header.js'
import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

import Homepage from './components/homepage/homepage.js';
import TestPage from './components/pages/TestPage/TestPage.js';

//importing needs for Stripe - might be possible to move this to a separate "page" component later
import StripeCheckout from './components/StripeCheckout/StripeCheckout.js';
import {Elements, StripeProvider} from 'react-stripe-elements';

import Compose from './components/pages/Compose/Compose.js';
import Postcard from './components/Postcard/Postcard.js';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-navigation">
            <Header/>
        </div>
        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={Homepage} />
          </Switch>
        </div>
        <div className="App-footer">
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Link to="/term/">Terms & Privacy</Link>

        <nav className="App-navigation">
          <img src="/logo.png" alt="Some logo"/>
          <h1 className="App-title">Send a postcard</h1>
          <Link to="/">Welcome</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write Article</Link>
          <Link to="/compose/">Compose</Link>
          <Link to="/postcard/">PostCard</Link>
          <Link to="/testpage/">TestPage</Link>
        </nav>
      
        <div className="App-intro">
            <h2> Why leave your house to send a postcard? Leave it to us!</h2>
        </div>
        

        <div className="App-mainContent">

          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/blog/' component={Blog} />
            <Route exact path='/write/' component={WriteArticle} />
            <Route exact path='/compose/' component={Compose}/>
            <Route exact path='/postcard/' component={Postcard}/>
            <Route exact path='/testpage/' component={TestPage}/>
          </Switch>
        
         {//example of Stripe component using public test key
              //<StripeProvider apiKey="pk_test_REGGeT4oO3tm4dsgHEo4Uisr00bsqbcD1w">
              // <div className="example">
               // <h1>React Stripe Elements Example</h1>
              //  <Elements>
               //   <StripeCheckout />
              //  </Elements>
             // </div>
              // </StripeProvider>
            }

        </div>
      </div>

    );
  }
}

export default App;
