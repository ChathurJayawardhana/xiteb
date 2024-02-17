import React from 'react';
import { options } from '../data/data';

export default function Offers() {
  return (
    <div className='max-w-[1520px] mx-auto px-4 py-8'>
      <h1 className='text-gray-500 font-bold text-2xl text-center py-2'>Offers</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {options.map((item) => (
          <div key={item.id} className='p-4 bg-white rounded-xl shadow-md'>
            <img
              className='object-cover w-full h-40 md:h-60 rounded-lg mb-4 p-3'
              src={item.image}
              alt={item.name}
            />
            <h2 className='text-xl font-bold mb-2 text-center'>{item.name}</h2>
            {item.date && <p className='text-gray-600 mb-2 text-center'>{item.date}</p>}
            <p className='text-gray-700 mb-2 font-bold text-center'>{item.option}</p>
            {item.para && <p className='text-gray-700 mb-2 text-center'>{item.para}</p>}
            {item.prize && <p className='text-gray-700 font-bold mb-2 text-center'>Price: {item.prize}</p>}
            <div className='flex justify-center'>
            <button className='bg-white border border-yellow-700 text-yellow-700  rounded-md text-center mx-auto p-2 m-2'>
              {item.button}
            </button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <button className='bg-white border border-yellow-700 text-yellow-700 w-[350px] rounded-md text-center mx-auto p-2 m-2'>View All</button>
        </div>
    </div>
  );
}
