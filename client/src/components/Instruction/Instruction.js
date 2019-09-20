import React, { Component } from 'react';
import './Instruction.css';

<<<<<<< HEAD:client/src/components/instruction/instruction.js

=======
>>>>>>> 4d9d0ce063bf84caa154f86453cb63ce4997f0e2:client/src/components/Instruction/Instruction.js
class Instruction extends Component {
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

export default Instruction;
