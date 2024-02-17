import React from 'react';
import { categories } from '../data/data';

export default function Gallery() {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-8'>
      <h1 className='text-blue-700 font-bold text-2xl text-left pb-2'>
        Experience Something New
      </h1>
      <p className='text-black text-xl text-left pb-4'>
        Choose home or proceed, the Hilton is here for you with memorable offers
      </p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {categories.map((item) => (
          <div
            key={item.id}
            className='relative overflow-hidden rounded-xl cursor-pointer group'
          >
            <img
              className='object-cover w-full h-60 md:h-80 lg:h-60 transition-transform duration-300 transform scale-100 group-hover:scale-105'
              src={item.image}
              alt={item.name}
            />
            <div className='absolute inset-0 flex items-center justify-center opacity-100 pt-10'>
              <h3 className='text-white font-bold text-xl'>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
