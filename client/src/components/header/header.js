import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../images/logo/download.png';
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <Link to="/">
            <div>
            <img src={logo} alt="Some logo"/>
            <h1 className="Header-title">Send a Postcard</h1>
            </div>
          </Link>
      </div>
    );
  }
}

export default Header;
