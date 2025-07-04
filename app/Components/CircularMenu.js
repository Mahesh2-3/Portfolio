"use client"
import React, { useState,useEffect } from 'react';
import { labels } from '../constants';
import Image from 'next/image';


const CircularMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [radius, setradius] = useState(0)
  const center = 175;
  const angleStep = (2 * Math.PI) / labels.length;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  useEffect(() => {
  const handleResize = () => {
    const w = window.innerWidth;
    setradius(w < 640 ? 175 : w < 768 ? 225 : 275);
  };

  window.addEventListener("resize", handleResize);
  handleResize(); // initial set

  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <div className='w-full h-[70vh] flex justify-center items-center'>
      <div className="relative w-[350px] h-[350px] mx-auto bg-transparent rounded-full flex items-center justify-center">

        {/* Tooltip */}
        {!menuOpen && (
          <div
            className="absolute md:bottom-full bottom-[80%] mb-3 px-4 py-1 bg-white text-black md:text-md text-xs font-semibold animate-bounce ease-in-out duration-[1500ms] rounded-md shadow-md select-none"
          >
            Click Me
            <span
              style={{
                position: 'absolute',
                bottom: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid white',
              }}
            />
          </div>

        )}

        {/* Center Image */}
        <Image
          src="/profile3.jpg"
          alt="Profile"
          className="md:w-[350px] sm:w-[300px] w-[200px] md:h-[350px] sm:h-[300px] h-[200px] rounded-full object-cover cursor-pointer z-10 border-4 border-white shadow-lg"
          onClick={toggleMenu}
        />

        {/* Circular Items */}
        {labels.map((label, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + (menuOpen ? radius * Math.cos(angle) : 0);
          const y = center + (menuOpen ? radius * Math.sin(angle) : 0);

          return (
            <div
              key={i}
              className={`absolute text-white font-semibold w-[200px] md:text-2xl text-md px-3 text-center transition-all duration-500 ease-out`}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
                opacity: menuOpen ? 1 : 0,
                pointerEvents: menuOpen ? 'auto' : 'none'
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularMenu;

