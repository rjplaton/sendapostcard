import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

//import intro from './images/other/intro.jpg';

import './App.css';
import Header from './components/header/header.js'

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

        <Header />
        
        <div className="App-mainContent">

          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/compose/' component={Compose} />
            <Route exact path='/postcard/' component={Postcard} />
            <Route exact path='/testpage/' component={TestPage} />
          </Switch>
        
         {//example of Stripe component using public test key
/*              <StripeProvider apiKey="pk_test_REGGeT4oO3tm4dsgHEo4Uisr00bsqbcD1w">
              <div className="example">
               <h1>React Stripe Elements Example</h1>
               <Elements>
                 <StripeCheckout />
               </Elements>
             </div>
              </StripeProvider>*/
            }

        </div>
        
        <div className="App-footer">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/term/">Terms & Privacy</Link>
            <Link to="/write/">Write Article</Link>
            <Link to="/compose/">Compose</Link>
            <Link to="/postcard/">PostCard</Link>
            <Link to="/testpage/">TestPage</Link>
          </nav>
        </div>

      
      </div>

    );
  }
}

export default App;
