import React from "react";
import { ContactContent } from "../constants";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
  const ReturnIcon = () => {
    return <FiInstagram size={20} />;
  };
  return (
    <div
      id="contact"
      className="mt-30 py-20 bg-white font-popp text-black w-full flex items-center justify-evenly px-5"
    >
      <div className="flex gap-10 flex-col">
        <h1 className="text-3xl font-bold font-heading">Contact Me</h1>
        <div className="sm:w-[60%] w-full">{ContactContent.line}</div>
        <span>{ContactContent.email}</span>
        <ul className="flex gap-4">
          {ContactContent.links.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <ReturnIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <img
        title="Contact Me!"
        className="w-40 h-40 mr-10"
        src="/fist-bump.gif"
        alt="fistBump"
      />
    </div>
  );
};

export default Contact;
