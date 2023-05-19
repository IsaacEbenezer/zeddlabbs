import React, { Component } from 'react';


export class ClassCounterValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className='border-solid border-4 border-teal-600 shadow-md w-[500vw]'>
        <div className='p-4 text-lg'>
          <p>Question-1</p>
          <p>This is class Component</p>
        </div>
        <div  className='p-4 text-lg'>
          <p>The value of count from Question-2 part is</p>
          <p>fetched from redux store: </p>
        </div>
        <div  className='p-4 text-lg mb-3'>
          <p>Use of Class state in Class component</p>
          <input type="text" placeholder='Enter Text Here' onChange={this.handleChange} />
          <p>{this.state.inputValue}</p>
        </div>
      </div>
    );
  }
}



export default ClassCounterValue;
