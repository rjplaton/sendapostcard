import React, { Component } from 'react';
import './About.css';


class About extends Component {

  render() {
    return (
      <div className="About">
        <h1>About Us</h1>
        <p>Send A Postcard, is a project developed and run by <a href="http://kickstartcoding.com/">Kickstart Coding</a> alumni.</p>
        <p>Our goal at Send A Postcard is to help make the act of sending a real, physical postcard easier than ever by allowing you to send a postcard from the comfort of your home.</p>
      </div>
    );
  }
}

export default About;