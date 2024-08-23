import React from 'react'
import image2 from '../assets/img/img4.png'
import image3 from '../assets/img/img18.jpg'

const Hero = () => {
  return (
    <div className='hero h-[35rem] w-full'>
        <div className='w-full h-full bg-black bg-opacity-65 flex justify-between'>
          <div className=' text-white px-16 mt-32'>
            <h1 className='flex text-6xl font-semibold py-5'> STEP INTO <br /> THE FUTURE <br /> OF FOOD </h1> 
            <p className='flex'>food future present your gateway to unlocking <br /> the limitless potential of the food industry.</p>
          
          <button className=' text-white mt-6 py-3 px-3 border rounded-r-2xl'>
            <h1>LEARN MORE</h1>
          </button>

           </div>
        </div>
    </div>
  )
}

export default Hero