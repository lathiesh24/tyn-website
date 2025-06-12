import React from 'react';

const Loader = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center h-screen bg-white'>
      <img src="https://res.cloudinary.com/dv0eaik7h/image/upload/v1749722540/tyn-logo_a5ivag.png" alt="TYN Logo" className='w-64' />

      <div className="relative w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="absolute inset-0 animate-slidebar bg-gradient-to-r from-[#0070c0]  to-[#0070c0] opacity-80" />
      </div>
    </div>
  );
};

export default Loader;
