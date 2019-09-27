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
import {templateIDs} from './TemplateID.js';
class Homepage extends Component {

  render() {
      let names = ["arthur_fist","good_thinking","i_know_where_you_live","is_pigeon"];

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
         <h1>The templates go here via template components.</h1>
         <div className="Homepage-template-display">
            {templateIDs.map(template => (
                <Template templateID={template.id} names = {template.file_name} title = {template.title}/>
            ))}
            
         </div>
      </div>
    );
  }
}

export default Homepage;
//         { 
//            this.state.images.map(image => (
//                <img alt={image.alt} src={image.src} />
//                ))
//          }
