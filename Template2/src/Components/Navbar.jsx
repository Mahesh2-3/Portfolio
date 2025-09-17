import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for menu toggle
import { Navlinks } from "../constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-20 h-[70px] flex items-center bg-black/10 backdrop-blur-md justify-between px-8 font-primary">
      {/* Logo */}
      <div className="text-2xl font-bold lg:text-black text-white lg:pl-20 pl-5">
        LOGO
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex text-white gap-10">
        {Navlinks.map((link, index) => (
          <li key={index} className="hover:text-gray-400 transition">
            <a href={link.src}>{link.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden text-white">
        {menuOpen ? (
          <X
            size={28}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          />
        ) : (
          <Menu
            size={28}
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] right-0 bg-light/40 backdrop-blur-sm rounded-2xl mr-5 w-fit h-fit p-8 flex flex-col items-center justify-start pt-10 gap-6 text-white">
          {Navlinks.map((link, index) => (
            <a
              key={index}
              href={link.src}
              className="text-lg hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
