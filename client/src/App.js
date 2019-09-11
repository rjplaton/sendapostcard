import React, { Component } from 'react';
// import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

// import LandingPage from './components/pages/LandingPage/LandingPage.js';
// import Blog from './components/pages/Blog/Blog.js';
// import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';
import Compose from './components/pages/Compose/Compose.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Compose/>
      </div>
    );
  }
}

export default App;
