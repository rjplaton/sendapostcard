import React, { Component } from 'react';
import logo from '../../images/logo/download.png';
import intro from '../../images/other/intro.jpg';
import pickacard from '../../images/other/pickacard.jpg';
import message from '../../images/other/message.png';
import address from '../../images/other/address.png';
import Instruction from '../Instruction/Instruction.js';
import Header from '../header/header.js';
import './homepage.css';
import templates from '../../template_images.json';

class Homepage extends Component {
  state = {
      images: [
          {"alt" : "sth", "src" : "https://www.gstatic.com/webp/gallery/1.jpg"},
          {"alt" : "Arthur Fist", "src" : "https://www.gstatic.com/webp/gallery/2.jpg"},
        ]
  }

  componentDidMount() {
  let data = [];
  for (let [alt,src] of Object.entries(templates.images)) {
      data.push({
          alt: alt,
          src: src,
      })
  }
  this.setState({
      images: data,
  });
  }

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
         <h1>The templates go here via template components.</h1>
         <div className="Homepage-template-display">

         { 
            this.state.images.map(image => (
                <img alt={image.alt} src={image.src} />
                ))
          }
         </div>
      </div>
    );
  }
}

export default Homepage;
