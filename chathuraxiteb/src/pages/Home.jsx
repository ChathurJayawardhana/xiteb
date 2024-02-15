import React, { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight}  from 'react-icons/bs'
import {RxDotFilled } from 'react-icons/rx'

export default function Featured() {
    const sliders = [
        {
          url : "https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.jpg?s=612x612&w=0&k=20&c=pRFt-m6Af60XAp2saRz4LtFjB6qBfRFki3Tf3c-4xtw=" 
        },
        {
            url :"https://media.istockphoto.com/id/1319571139/photo/colleagues-discussing-business.jpg?s=612x612&w=0&k=20&c=53M1IUR2mt03QmKAzdUy88R_iwqgnqQoD5XgWyPkVUQ="

        },
        {
            url : "https://media.istockphoto.com/id/1254975606/photo/diverse-staff-members-gather-together-brainstorming-solving-working-moments.jpg?s=612x612&w=0&k=20&c=gXPXY52kN2MMe0ROR-wwM_NDbeBEwemutOe2v20cfXE="
        }

    ]

    const [currentIndex,setCurrentIndex] = useState(0)

    const prevSlider = ()=>{
      const isFirslide = currentIndex ===0
      const newIndex = isFirslide ? sliders.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
    }

    const nextSlider = ()=>{
      const isLastlide = currentIndex === sliders.length - 1
      const newIndex = isLastlide ? 0 : currentIndex+1
      setCurrentIndex(newIndex)
    }

    const moveToSlide = (slideIndex) =>{
      setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-auto h-[600px] w-full py-4 px-4 relative'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
           style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
        >
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl
         rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
           <BsChevronCompactLeft onClick={prevSlider}/> 
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl
         rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
           <BsChevronCompactRight onClick={nextSlider}/> 
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
              sliders.map((sliderItems,slideIndex)=>(
                <div 
                key={slideIndex}
                onClick={()=>moveToSlide(slideIndex)}
                className='text-2xl cursor-pointer' >
                  <RxDotFilled/>
                </div>
              ))
            }
        </div>
      
    </div>
  )
}

