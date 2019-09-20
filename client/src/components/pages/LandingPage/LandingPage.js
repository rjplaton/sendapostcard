import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Instruction from '../../Instruction/Instruction.js';
import pickacard from '../../../images/other/pickacard.jpg';
import message from '../../../images/other/message.png';
import address from '../../../images/other/address.png';

import './LandingPage.css';
class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="LandingPage">
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
        
          <header className="LandingPage-header">
            <p>
              Kickstart Coding - Frontend React<br />
              MERN Starter Project
            </p>
            <Link to="/blog/">Blog</Link>
            <Link to="/write/">Write article</Link>
          </header>
        </div>
      </div>
    );
  }
}

export default LandingPage;
