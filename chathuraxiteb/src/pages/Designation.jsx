import React from 'react';
import cinnaman from '../assets/112516884.jpg';
import srimap from '../assets/srimap.png';

export default function Designation() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-purple-500 font-bold text-2xl text-center'>Our Destination</h3>
      <div className='w-[1520] mx-auto flex justify-center items-center mt-24 relative'>
      <img
          src={srimap}
          alt='Srimap'
          className='absolute top-30 left-20 z-30 bg-fixed srimap-img hidden md:block'
        />

        <img
          src={cinnaman}
          alt='Cinnaman'
          className='relative z-10'
          style={{ maxWidth: '50%', zIndex: '20' }}
        />
        <div className='z-50 max-w-36 bg-gray-100  hidden md:block p-4 px-3'>
          <h1 className='p-4 text-purple-700 text-center'>Cinamman</h1>
          <p className='p-2'>
            Take a peek an 45 million chathura jayawardhana
          </p>
          <button className='bg-blue-500 text-white p-2'>Discover More</button>
        </div>
      </div>
    </div>
  );
}
