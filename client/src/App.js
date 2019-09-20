import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import logo from './images/logo/download.png';
import pickacard from './images/other/pickacard.jpg';
import message from './images/other/message.png';
import address from './images/other/address.png';

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

import Compose from './components/pages/Compose/Compose.js';
import Postcard from './components/Postcard/Postcard.js';

//import Compose from './components/Compose/Compose.js';
import Instruction from './components/instruction/instruction.js';

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
            <Instruction
                image={pickacard}
                todo="Pick a card"
                details="Choose a postcard template"
             />

            <Instruction
                image={message}
                todo="Write your message"
                details="Customize your poscard to your liking"
             />
             
             <Instruction
                  image={address}
                  todo="Receiver's address"
                  details="Type in where the postcard should be sent to"
             />


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
