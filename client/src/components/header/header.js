import React, { Component } from 'react';

import logo from '../../images/logo/download.png';
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <img src={logo} alt="Some logo"/>
          <h1 className="Header-title">Send a postcard</h1>
      </div>
    );
  }
}

export default Header;
