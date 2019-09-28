import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

//import intro from './images/other/intro.jpg';

import './App.css';
import Header from './components/header/header.js'

import Homepage from './components/homepage/homepage.js';
import Footer from './components/Footer/Footer.js';
import TestPage from './components/pages/TestPage/TestPage.js';
import ThankYou from './components/pages/ThankYou/ThankYou.js';

//importing needs for Stripe - might be possible to move this to a separate "page" component later
import StripeCheckout from './components/StripeCheckout/StripeCheckout.js';
import {Elements, StripeProvider} from 'react-stripe-elements';

import Compose from './components/pages/Compose/Compose.js';
import Postcard from './components/Postcard/Postcard.js';
import About from './components/pages/About/About.js';
import TermsOfService from './components/pages/TermsOfService/TermsOfService.js';
import PrivacyPolicy from './components/pages/PrivacyPolicy/PrivacyPolicy.js';

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
            <Route exact path='/thank-you/:lobApiId' component={ThankYou} />
            <Route exact path='/compose/:templateId' component={Compose} />
            <Route exact path='/about/' component={About} />
            <Route exact path='/terms-of-service/' component={TermsOfService} />   
            <Route exact path='/privacy-policy/' component={PrivacyPolicy} />
          </Switch>

        </div>
        
        <Footer />

      
      </div>

    );
  }
}

export default App;
