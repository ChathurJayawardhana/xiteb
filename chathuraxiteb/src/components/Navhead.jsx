import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navhead() {

  //this is comment
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'about' },
    { id: 2, link: 'Room & Suits' },
    { id: 3, link: 'Dining ' },
    { id: 4, link: 'Experience' },
    { id: 5, link: 'Events' },
    { id: 6, link: 'Gallery' },
    { id: 7, link: 'Offers' },
    { id: 8, link: 'More' },
  ];

  return (
    <div className=' flex justify-center items-center w-full h-14 px-4 text-gray-700 bg-black '>
      
<div className='flex gap-x-32'>
      <ul className='hidden md:flex '>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 text-xl cursor-pointer font-bold text-white capitalize hover:scale-105 duration-200'
          >
            <Link to={link}  smooth duration={500}>
              {link} 
            </Link>
            
          </li>
        
        ))}
      </ul>
     
      </div>

     
      
    </div>
  );
}
