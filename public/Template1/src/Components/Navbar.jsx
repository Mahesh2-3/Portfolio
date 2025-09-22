import React, { useState } from "react";
import { hero, Navlinks } from "../constants";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nameList = hero.name.split(" ");
  let name = "";
  nameList.forEach((element) => {
    name += element[0];
  });


  return (
    <nav className="bg-secondary/20 font-popp backdrop-blur-md z-40 lg:px-40 px-6 text-white fixed top-0 w-full h-[60px] flex items-center justify-between">
      {/* Logo */}
      <div className="logo font-bold text-3xl font-logo">
        {name.toUpperCase()}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-14">
        {Navlinks.map((link, i) => (
          <li key={i}>
            <a href={link.src} className="hover:text-purple-400 transition">
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-secondary/90 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6">
            {Navlinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.src}
                  className="block text-lg hover:text-purple-400 transition"
                  onClick={() => setIsOpen(false)} // close after click
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
