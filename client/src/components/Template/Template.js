import React, { Component } from 'react';

import logo from '../../images/logo/download.png';
import './Template.css'

class Template extends Component {
  render() {
    return (
      <div className="Template">

          <img onClick={this.props.onClick} src = {"./postcard_front_templates/"+this.props.names+".jpg"} alt = "" />
          <h4> {this.props.title} </h4>

      </div>
    );
  }
}

export default Template;
//          <Link to={'/compose/' + {this.props.templateID}}>          </Link>
