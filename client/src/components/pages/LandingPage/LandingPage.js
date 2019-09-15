import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import './LandingPage.css';
class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <header className="LandingPage-header">
          <p>
            Kickstart Coding - Frontend React<br />
            MERN Starter Project
          </p>
          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write article</Link>
        </header>
      </div>
    );
  }
}

export default LandingPage;
