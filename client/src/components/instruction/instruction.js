import React, { Component } from 'react';
import './instruction.css';


class Character extends Component {
  render() {
    return (
      <div className="Instruction">
        <img src={this.props.image} alt={this.props.title}/>
        <h3> {this.props.todo} </h3>
        <h4> {this.props.details} </h4>
      </div>
    );
  }
}

export default Character;
