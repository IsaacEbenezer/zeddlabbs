import React, { Component } from 'react';


export class ClassCounter extends Component {
  
  render() {
   
    return (
      <div>
        <h2>Counter: {}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}



export default ClassCounter;
