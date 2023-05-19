import React, { useRef } from 'react';

function Scroll() {
  const scrollRef = useRef(null);

  const scrollToDiv = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className='border-solid border-2 border-teal-800 text-center p-6 text-lg font-bold h-[50vh]'>
        <h1>Question -5</h1>
        <h1>
          In this task I have used useRef hook to scroll to another div. This is the Primary div which has a button that onclick slides to another div
        </h1>
        <button className='bg-green-500 p-2 rounded-sm my-10' onClick={scrollToDiv}>
          Scroll to div
        </button>
      </div>
      <div ref={scrollRef} className='bg-blue-300 h-[100vh]'></div>
    </div>
  );
}

export default Scroll;
