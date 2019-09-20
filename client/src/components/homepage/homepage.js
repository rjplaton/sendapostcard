import React, { Component } from 'react';
import logo from '../../images/logo/download.png';
import intro from '../../images/other/intro.jpg';
import pickacard from '../../images/other/pickacard.jpg';
import message from '../../images/other/message.png';
import address from '../../images/other/address.png';
import Instruction from '../Instruction/Instruction.js';
import Header from '../header/header.js';
import './homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="Homepage-intro">
            <h1> Something goes here! </h1>
        </div>
        <div className="Homepage-instruction">
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
         </div>
         <div className="Homepage-template-display">
         <h1>The templates go here via template components.</h1>
         </div>
      </div>
    );
  }
}

export default Homepage;
