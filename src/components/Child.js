import React, { useState } from 'react';

function Child({ onData }) {
  const [inputData, setInputData] = useState('');

  const sendDataToParent = () => {
    onData(inputData);
  };

  return (
    <div className='bg-black'>
  <input value={inputData} onChange={(e) => setInputData(e.target.value)} className='bg-yellow-200' />
  <button onClick={sendDataToParent} className='text-white'>Send Data to Parent</button>
</div>

  );
}

export default Child;
