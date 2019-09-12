import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';
import Compose from './components/pages/Compose/Compose.js';
import Postcard from './components/Postcard/Postcard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <img src="/logo.png" alt="Some logo"/>
          <h1 className="App-title">Send a postcard</h1>
        </nav>
        <div className="App-intro">
        <h2> Why leave your house to send a postcard? Leave it to us!</h2>
        </div>

        <div className="App-mainContent">

        </div>

        <Switch>
          <Route exact path='/compose/' component={Compose}/>
          <Route exact path='/postcard/' component={Postcard}/>
        </Switch>

      </div>
    );
  }
}

export default App;
