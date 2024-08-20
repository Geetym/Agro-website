import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between py-3 px-10 bg-[#86160b]'>
        <div>
            <h1 className='text-xl font-bold px-10'>Food Future Group <br />
            <p className='text-xs font-extralight'>creating our food Future today</p>
            </h1>
        </div>
{/* nxt */}
        <div className='flex gap-10 text-x items-center'>
            <p className='hover:underline cursor-pointer'>ABOUT</p>
            <p className='hover:underline cursor-pointer'>SERVICE</p>
            <p className='hover:underline cursor-pointer'>TEAM</p>
            <p className='hover:underline cursor-pointer'>REVIEWS</p>
            <p className='hover:underline cursor-pointer'>CLIET</p>
            <p className='hover:underline cursor-pointer'>CONTACT</p>
        </div>
{/* nxt */}       
        {/* <div className='flex gap-4 items-center'>
            <form className='flex items-center'>
                <input 
                    className='rounded-xl px-4 py-2' 
                    type="search" 
                    placeholder='Search...'
            />
          <button type="submit" className='ml-2'>
            <IoIosSearch className='text-2xl' />
          </button>
        </form>

        <button type="submit" className='ml-2'>
            <IoCartOutline className='text-2xl' />
        </button>
        
      </div> */}
        
    </nav>
  )
}

export default Navbar