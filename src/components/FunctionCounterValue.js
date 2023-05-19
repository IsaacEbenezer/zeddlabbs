import React, { useState, useContext } from 'react';
import { CounterContext } from './FunctionCounter';

const FunctionCounterValue = () => {
  const [inputValue, setInputValue] = useState('');
  const count = useContext(CounterContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <div className='border-solid border-4 border-teal-600 shadow-md w-[500vw]'>
      <div className='p-4 text-lg'>
        <p>This is a functional Component</p>
      </div>
      <div className='p-4 text-lg'>
        <p>The value of count from Question-2 part is {count}</p>
        <p>Fetched from the context</p>
      </div>
      <div className='p-4 text-lg'>
        <p>Use of Class state in functional component</p>
      </div>
      <div className='p-4 text-lg mb-3'>
        <input type="text" placeholder='Enter Text Here' onChange={handleChange} />
        <p>{inputValue}</p>
      </div>
    </div>
  );
};

export default FunctionCounterValue;
