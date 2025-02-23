
"use client"
import React from 'react'
const Footer = () => {
  return (
    <div className='h-[10vh] w-[100vw] bg-[#1d1d1d] flex lg:block justify-center sm:justify-evenly items-center'>
      <div className=' flex h-[100%] items-center  gap-0 lg:hidden'>
        <div className=' drop-shadow-[0px_0px_25px_rgba(255,255,255,0.8)] font-bold text-3xl '>Maheshbabu</div>
      </div>
      <div className='flex text-xl font-bold h-[100%]  justify-evenly items-center '>
      <div className='hidden lg:block'>"Building ideas into reality."</div>
            <div className='hidden sm:block'>© <span>{new Date().getFullYear()}</span> Mahesh. All Rights Reserved.</div>

      <div className='hidden lg:block'>"Code, Create, Innovate."</div>
      </div>
    </div>
  )
}

export default Footer
