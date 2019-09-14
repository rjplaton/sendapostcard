import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';


import StripeCheckout from './components/StripeCheckout/StripeCheckout.js';
import {Elements, StripeProvider} from 'react-stripe-elements';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">MERN Starter</h1>
          <Link to="/">Welcome</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write Article</Link>
        </nav>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/blog/' component={Blog} />
            <Route exact path='/write/' component={WriteArticle} />
          </Switch>
              <StripeProvider apiKey="pk_test_REGGeT4oO3tm4dsgHEo4Uisr00bsqbcD1w">
                <div className="example">
                  <h1>React Stripe Elements Example</h1>
                  <Elements>
                    <StripeCheckout />
                  </Elements>
                </div>
              </StripeProvider>
        </div>

      </div>
    );
  }
}

export default App;
