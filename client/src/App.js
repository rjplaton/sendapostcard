import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import logo from './images/logo/download.png';
import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <img src={logo} alt="Some logo"/>
          <h1 className="App-title">Send a postcard</h1>
        </nav>
        <div className="App-intro">
        <h2> Why leave your house to send a postcard? Leave it to us!</h2>
        </div>

        <div className="App-mainContent">

        </div>

      </div>
    );
  }
}

export default App;
