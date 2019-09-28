import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
        <div className="App-footer">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/terms-of-service/">Terms</Link>
            <Link to="/privacy-policy/">Privacy</Link>
          </nav>
          <div className="Copyright">
          <p>2019 Send A Postcard</p>
          </div>
        </div>
    );
  }
}

export default Footer;