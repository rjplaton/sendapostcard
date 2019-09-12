import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <img src="download.png" alt="Icon"/>
          <h1 className="App-title">Send a postcard</h1>
        </nav>

        <div className="App-mainContent">

        </div>

      </div>
    );
  }
}

export default App;
