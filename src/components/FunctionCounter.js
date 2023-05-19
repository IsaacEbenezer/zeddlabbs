import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const incrementByFive = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return (

    <CounterContext.Provider value={count} className='border-solid border-4 border-teal-600'>
      <div className='border-solid border-4 border-teal-600 shadow-md '>
        <p className='text-lg'>Functional component</p>
        <p>In this task I have used useState, useEffect, useCallback,useContext which are major hooks of react.
Context Value into component 1: This is content from Context Provider</p>
      </div>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={incrementByFive} className='bg-green-500 rounded-md p-2'>Increment by 5</button>
      </div>
    </CounterContext.Provider>
  );
};

export default FunctionCounter;
