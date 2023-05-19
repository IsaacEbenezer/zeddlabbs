import React, { useState } from 'react';
import Child from './Child';

function ParentandChild() {
  const [inputData, setInputData] = useState('');

  const handleDataFromChild = (data) => {
    setInputData(data);
  };

  return (
    <div className=' flex border-solid border-4 border-teal-600 shadow-md '>
      <div className='p-4 text-lg'>
        Question 6 I am sending input data from child component into parent
        component by using state variable
      </div>
      <div className='p-4 text-lg'>This is parent Component. You have entered: <span className='text-lg text-green-500 font-semibold'>{inputData} </span>in child component</div>
      <div className='p-4 text-lg'>
      <Child onData={handleDataFromChild} />
      </div>
    </div>
  );
}

export default ParentandChild;
