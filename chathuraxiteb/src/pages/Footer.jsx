import React from 'react';
import footer1 from '../assets/Footer/foo.png';
import footer2 from '../assets/Footer/room.jpg';
import footer3 from '../assets/Footer/upper.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-8 relative'>
      <div className='h-400 relative'>
        <img src={footer2} alt="Footer 2" className="w-full h-40 z-10 object-cover" style={{ maxHeight: '50%' }} />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <img src={footer3} alt="Footer 3" className="w-full h-40 object-cover" />
        </div>
      </div>
      <div className='flex flex-wrap justify-around items-center'>

        <div>
           <h1 className='text-purple-700 font-bold text-center p-2'>About</h1>
           <p className='text-black/60 text-left p-2'>About Cinnaman And Resort</p>
           <p className='text-black/60 text-left p-2'>Media and accolades</p>
           <p className='text-black/60 text-left p-2'>Gallery</p>
           <p className='text-black/60 text-left p-2'>CSR & Sustainability</p>
           <p className='text-black/60 text-left p-2'>John Keells Group</p>
           <p className='text-black/60 text-left p-2'>Cinnamon Air</p>
           <p className='text-black/60 text-left p-2'>Nature Trails</p>
           <p className='text-black/60 text-left p-2'>Cinnamon Box Office</p>
           <p className='text-black/60 text-left p-2'>Terms And Conditions</p>
           <p className='text-black/60 text-left p-2'>Privacy Statement</p>
        </div>

        <div>
          <div>
            <h1 className='text-purple-700 font-bold text-center p-2'>Get In Touch</h1>
            <p  className='text-black/60 text-left p-2'>Know Sri Lanka</p>
            <p className='text-black/60 text-left p-2'>Know Maldives</p>
            <p className='text-black/60 text-left p-2'>Contact Us</p>
            <p className='text-black/60 text-left p-2'>FAQs</p>
          </div>
          <div>
            <h1 className='text-purple-700 font-bold text-center p-2'>section</h1>
            <p className='text-black/60 text-left p-2'>Careers </p>
            <p className='text-black/60 text-left p-2'>Blog</p>
          </div>
        </div>

        <div>
           <div className='p-10'>
            <h1 className='text-purple-700 font-bold text-center'>Follow Us</h1>
               <div className='flex justify-center gap-3'>
                 <FaFacebook size={30} />
                 <FaTwitter size={30} />
                 <FaLinkedin size={30} />
                 <FaInstagramSquare size={30} />
                 <FaYoutube size={30} />
               </div>
           </div>
           <div>
            <h1 className='text-purple-700 font-bold text-center'>Get Cinnaman In Your Inbox</h1>
            <input type='text' placeholder='Email Us' className='m-10 border-gray-700'/>
           </div>
        </div>


      </div>

      <div className='h-300 relative'>
      <img src={footer1} alt="Footer 1" className="w-full h-40 z-10 object-cover" style={{ maxHeight: '50%' }} />
      </div>

    </div>
  );
}
