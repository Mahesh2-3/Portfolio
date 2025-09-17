import React from "react";
import { Navlinks } from "../constants.js";

const Navbar = () => {
  return (
    <div className="py-5 fixed top-0 backdrop-blur-md  z-10 w-full text-third justify-items-end sm:px-15 px-5 align-middle">
      <ul className="flex items-center sm:text-base text-sm sm:gap-15 gap-5 font-semibold">
        {Navlinks.map((link, index) => (
          <li key={index}>
            <a href={link.src}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
