"use client";
import React, { useEffect, useState } from 'react';
import "./comp.css";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false); // Track if we are on the client side
  const [activePath, setActivePath] = useState("");

  // Check if we are on the client-side
  useEffect(() => {
    setIsClient(true);
    setActivePath(window.location.pathname); // Get the current path
  }, []);

  function hover() {
    let a = document.querySelector(".imgg");
    a.style.transition = "all 1s ease-in-out";
    a.style.opacity = "1";
    a.style.textShadow = "0 0 25px rgba(255, 255, 255, 0.8)"; // Neon white glow
  }

  function left() {
    let a = document.querySelector(".imgg");
    a.style.transition = "all 1s ease-in-out";
    a.style.opacity = "0";
    a.style.textShadow = "none";
  }

  if (!isClient) {
    return null; // Return null on server-side, wait for client-side rendering
  }

  return (
    <div className='w-full flex justify-end lg:justify-between px-12 h-[10vh] sticky top-0 bg-black bg-opacity-80 z-10'>
      <div onMouseEnter={hover} onMouseLeave={left} className='items-center gap-0 lg:flex hidden'>
        <div className='text-5xl font-serif font-bold'>M</div>
        <div className='opacity-0 imgg font-bold text-3xl relative'>aheshbabu</div>
      </div>
      <div className='min-w-[45%]'>
        <ul className='flex justify-center gap-7 items-center h-full'>
          <li className='card' data-active={activePath === "/"}>
            <div className='card2 cursor-pointer'>
              <a href="https://mahesh2-3.github.io/Portfolio/">About Me</a>
            </div>
          </li>
          <li className='card' data-active={activePath.includes("/myprojects")}>
            <div className='card2 cursor-pointer'>
              <a href="https://mahesh2-3.github.io/Portfolio/myprojects">My Projects</a>
            </div>
          </li>
          <li className='card' data-active={activePath.includes("/contactme")}>
            <div className='card2 cursor-pointer'>
              <a href="https://mahesh2-3.github.io/Portfolio/contactme">Contact Me</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
