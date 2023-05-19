// ClassCounter.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

class ClassCounter extends Component {
  render() {
    return (
      <div className='border-solid border-4 border-teal-600' >
        <p className='text-lg'>Class Component</p>
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.increment} className='bg-green-400 p-2 rounded-md'>Increment</button>
        <button onClick={this.props.decrement} className='bg-green-400 p-2 rounded-md mx-2'>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
