import React, { Component } from 'react';
import logo from '../../images/logo/download.png';
import intro from '../../images/other/intro.jpg';
import pickacard from '../../images/other/pickacard.jpg';
import message from '../../images/other/message.png';
import address from '../../images/other/address.png';

import Instruction from '../Instruction/Instruction.js';
import Header from '../header/header.js';
import Template from '../Template/Template.js';
import './homepage.css';
import { Link, Switch, Route } from 'react-router-dom'
import { templateIDs } from './TemplateID.js';
import { isObjectTypeIndexer } from '@babel/types';
class Homepage extends Component {

  render() {
    return (
      <div className="Homepage">
        <div className="Homepage-intro">
          <h1> The easiest way to send a postcard! </h1>
          <div>
            <h2>You pick a card and write your message.</h2>
            <h2>We print and mail for you!</h2>
          </div>
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
          
          {templateIDs.map((template, index) => (
            <Link to={"/compose/" + postMessage.id}>
              <Template key={index} templateID={template.id} names={template.file_name} title={template.title} />
            </Link>
          ))}

        </div>

      </div>
    );
  }
}

export default Homepage;

