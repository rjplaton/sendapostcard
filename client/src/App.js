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
//import Compose from './components/Compose/Compose.js';
import Homepage from './components/homepage/homepage.js';
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
        </div>
      </div>

    );
  }
}

export default App;
