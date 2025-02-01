"use client"
import React from 'react'
import "./comp.css"

const Navbar = () => {

  function hover() {
    let a = document.querySelector(".imgg");
    a.style.transition = "all 1s ease-in-out"; // Correct the typo here
    a.style.opacity = "1";
    a.style.textShadow = "0 0 25px rgba(255, 255, 255, 0.8)"; // Neon white glow

  }

  function left() {
    let a = document.querySelector(".imgg");
    a.style.transition = "all 1s ease-in-out"; // Ensure transition is set here as well
    a.style.opacity = "0";
    a.style.textShadow = "none"
  }

  return (
    <div className='w-full flex justify-end lg:justify-between px-12 h-[10vh]  sticky top-0  bg-black bg-opacity-80 z-10'>
      <div onMouseEnter={hover} onMouseLeave={left} className=' items-center gap-0 lg:flex hidden'>
        <img className='h-full' src="/logo.svg" alt="" />
        <div className='opacity-0 imgg font-bold text-3xl relative right-5'>aheshbabu</div>
      </div>
      <div className='min-w-[45%]'>
        <ul className='flex justify-center gap-7 items-center h-full'>
          <li className='card' data-active={window.location.pathname === "/"}>
            <div className='card2 cursor-pointer'>
              <a href="http://localhost:3000/">About Me</a>
            </div>
          </li>
          <li className='card' data-active={window.location.pathname.includes("/myprojects")}>
            <div className='card2 cursor-pointer'>
              <a href="http://localhost:3000/myprojects">My Projects</a>
            </div>
          </li>
          <li className='card' data-active={window.location.pathname.includes("/contactme")}>
            <div className='card2 cursor-pointer'>
              <a href="http://localhost:3000/contactme">Contact Me</a>
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar